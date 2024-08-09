import { useState } from "react";

export const useId = () => {
  const [id] = useState(() =>
    String(Math.floor(Math.random() * 1_000_000_000))
  );
  return id;
};
