import { useEffect, useState } from "react";
import { executeSearch } from "../../api/executeSearch";
import { ICharacterList } from "../../types/character";

export const useCharacters = (search: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ICharacterList | undefined>(undefined);

  useEffect(() => {
    const asyncFn = async () => {
      try {
        const characters = await executeSearch(search);
        setData(characters);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    };
    asyncFn();
    return () => {
      setIsLoading(true);
    };
  }, [search]);

  return { data, isLoading };
};
