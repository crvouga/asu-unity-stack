import { useEffect, useState } from "react";

export const useCurrentUrl = () => {
  const [currentUrl, setCurrentUrl] = useState(new URL(window.location.href));

  useEffect(() => {
    const updateCurrentUrl = () => {
      setCurrentUrl(new URL(window.location.href));
    };

    window.addEventListener("popstate", updateCurrentUrl);
    window.addEventListener("hashchange", updateCurrentUrl);
    window.addEventListener("pushState", updateCurrentUrl);

    return () => {
      window.removeEventListener("popstate", updateCurrentUrl);
      window.removeEventListener("hashchange", updateCurrentUrl);
      window.removeEventListener("pushState", updateCurrentUrl);
    };
  }, []);

  return currentUrl;
};
