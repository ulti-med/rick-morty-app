import { ChangeEventHandler } from "react";
import "./Search.css";

interface SearchProps {
  inputValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Search = ({ inputValue, onChange }: SearchProps) => {
  return (
    <label>
      Search for a Rick and Morty Character
      <input value={inputValue} onChange={onChange} />
    </label>
  );
};
