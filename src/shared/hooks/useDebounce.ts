import { useState, useEffect } from "react";

export const useDebounce = (inputValue: string, delay: number) => {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);
  return debounceValue;
};
