/**
 * Registry for callbacks
 * This is used for extracting state from react components
 */
export class CallbackRegistry {
  constructor() {
    this.callback = null;
  }

  async call() {
    if (typeof this.callback === "function") {
      return this.callback?.();
    }
    return null;
  }

  async register(callback) {
    this.callback = callback;
  }
}

window.CallbackRegistry = CallbackRegistry;
