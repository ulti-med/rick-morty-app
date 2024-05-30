import { ChangeEvent, useState } from "react";
import { CharacterCard } from "../../components/character-card/CharacterCard";
import { Search } from "../../components/search/Search";
import { useCharacters } from "../../shared/hooks/useCharacters";
import { useDebounce } from "../../shared/hooks/useDebounce";

export const Characters = () => {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue, 500);
  const { data, isLoading } = useCharacters(debounceValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {" "}
      <Search inputValue={inputValue} onChange={handleChange} />
      <CharacterCard
        image={""}
        name={""}
        gender={"Female"}
        status={"unknown"}
      />
    </>
  );
};
