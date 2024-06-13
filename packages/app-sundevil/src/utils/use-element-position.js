import { useEffect, useState } from "react";

export const useElementPosition = ref => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (ref.current) {
      const handlePosition = () => {
        const { left, top } = ref.current.getBoundingClientRect();
        setPosition({ left, top });
      };

      handlePosition();

      window.addEventListener("resize", handlePosition);
      window.addEventListener("scroll", handlePosition);

      return () => {
        window.removeEventListener("resize", handlePosition);
        window.removeEventListener("scroll", handlePosition);
      };
    }
  }, [ref]);

  return position;
};
