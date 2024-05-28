import { ChangeEvent, useEffect, useState } from "react";
import "./Search.css";
import { executeSearch } from "../../api/executeSearch";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const asyncFn = async () => {
      const data = await executeSearch(inputValue);
    };
    asyncFn();
  }, [debounceValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(inputValue);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);
  return (
    <label>
      Search for a Rick and Morty Character
      <input value={inputValue} onChange={handleChange} />
    </label>
  );
};
