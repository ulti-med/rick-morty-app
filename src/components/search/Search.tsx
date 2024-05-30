import "./Search.css";

export const Search = ({ inputValue, onChange }) => {
  return (
    <label>
      Search for a Rick and Morty Character
      <input value={inputValue} onChange={onChange} />
    </label>
  );
};
