// @ts-check

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/**
 * @typedef {Object} Dimensions
 * @property {number} width - The width of the element
 * @property {number} height - The height of the element
 */

/**
 * @typedef {Object} ElementSet
 * @property {Object.<string, Dimensions>} elements - Individual element dimensions
 */

/**
 * @typedef {Object} ElementDimensionsContextType
 * @property {Object.<string, ElementSet>} elementSets - The sets of elements and their dimensions
 * @property {(setId: string, elementId: string, dimensions: Dimensions) => void} updateElementSet - Function to update an element's dimensions
 * @property {(setId: string, elementId: string) => void} removeElement - Function to remove an element from a set
 */

/** @type {React.Context<ElementDimensionsContextType>} */
const ElementDimensionsContext = createContext(
  /** @type {ElementDimensionsContextType} */ ({
    elementSets: {},
    updateElementSet: () => {},
    removeElement: () => {},
  })
);

/**
 * Provider component for the ElementDimensionsContext
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
// eslint-disable-next-line react/prop-types
export const ElementSetMaxDimensionsProvider = ({ children }) => {
  const [elementSets, setElementSets] = useState({});

  const updateElementSet = useCallback((setId, elementId, dimensions) => {
    setElementSets(prevSets => {
      const currentSet = prevSets[setId] || { elements: {} };
      const updatedElements = {
        ...currentSet.elements,
        [elementId]: dimensions,
      };

      // Only update if dimensions have changed
      if (
        JSON.stringify(currentSet.elements[elementId]) ===
        JSON.stringify(dimensions)
      ) {
        return prevSets;
      }

      return {
        ...prevSets,
        [setId]: { elements: updatedElements },
      };
    });
  }, []);

  const removeElement = useCallback((setId, elementId) => {
    setElementSets(prevSets => {
      const currentSet = prevSets[setId];
      if (!currentSet) return prevSets;

      // eslint-disable-next-line no-unused-vars
      const { [elementId]: _removed, ...restElements } = currentSet.elements;
      if (Object.keys(restElements).length === 0) {
        // @ts-ignore
        // eslint-disable-next-line no-unused-vars
        const { [setId]: _removedSet, ...restSets } = prevSets;
        return restSets;
      }

      return {
        ...prevSets,
        [setId]: { elements: restElements },
      };
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      elementSets,
      updateElementSet,
      removeElement,
    }),
    [elementSets, updateElementSet, removeElement]
  );

  return (
    <ElementDimensionsContext.Provider value={contextValue}>
      {children}
    </ElementDimensionsContext.Provider>
  );
};

export const useElementSetMaxDimensions = ({
  elementSetId,
  elementId,
  elementRef,
}) => {
  const { elementSets, updateElementSet, removeElement } = useContext(
    ElementDimensionsContext
  );

  const updateDimensions = useCallback(() => {
    if (elementRef.current) {
      const { width, height } = elementRef.current.getBoundingClientRect();
      updateElementSet(elementSetId, elementId, { width, height });
    }
  }, [elementRef, elementSetId, elementId, updateElementSet]);

  useEffect(() => {
    const observer = new MutationObserver(updateDimensions);

    if (elementRef.current) {
      observer.observe(elementRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      removeElement(elementSetId, elementId);
      window.removeEventListener("resize", updateDimensions);
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [elementSetId, elementId, elementRef, updateDimensions, removeElement]);

  const maxDimensions = useMemo(() => {
    const set = elementSets[elementSetId];
    if (!set) return { width: 0, height: 0 };

    return Object.values(set.elements).reduce(
      (max, dim) => ({
        width: Math.max(max.width, dim.width),
        height: Math.max(max.height, dim.height),
      }),
      { width: 0, height: 0 }
    );
  }, [elementSets, elementSetId]);

  return maxDimensions;
};
