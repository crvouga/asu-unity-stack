/* eslint-disable camelcase */

const originalRemoveChild = Node.prototype.removeChild;

const revertRemoveChild = () => {
  if (typeof originalRemoveChild === "function") {
    Node.prototype.removeChild = originalRemoveChild;
  }
};

/**
 * This function should not be used unless absolutely necessary.
 * We're running into an issue with react.js crashing when removing a child from a parent.
 * And we need it resolved fast so we're resorting to this hack.
 *
 * This will just swallow the error and return null.
 */
const patchRemoveChild = ({ shouldLog = false, swallowError = true } = {}) => {
  const log = (...args) => {
    if (shouldLog) {
      if (console) {
        // eslint-disable-next-line no-console
        console.log(...args);
      }
    }
  };

  log("Patching removeChild. This is probably a terrible idea.");

  const hasNode = typeof Node === "function" && Node.prototype;

  if (!hasNode) {
    log("Can not patch removeChild, since global object Node is not defined");
    return;
  }

  Node.prototype.removeChild = function patchedRemoveChild(child) {
    try {
      log("removeChild...");
      log("this", this);
      log("this.outerHTML", this?.outerHTML);
      log("child", child);
      log(
        "this.childNodes",
        this.childNodes.length,
        Array.prototype.slice
          .call(this.childNodes)
          .map(childNode => log("child.nodeValue", childNode.nodeValue))
      );
      log("child.parentNode", child.parentNode.outerHTML);
      // debugger;
      if (child.parentNode !== this) {
        log("Cannot remove a child from a different parent", child, this);

        return child;
      }

      // eslint-disable-next-line prefer-rest-params
      return originalRemoveChild.apply(this, arguments);
    } catch (error) {
      if (!swallowError) {
        throw error;
      }
      log("Swallowing error!", error);
      return null;
    }
  };

  log("Patched removeChild.");
};

export { patchRemoveChild, revertRemoveChild };
