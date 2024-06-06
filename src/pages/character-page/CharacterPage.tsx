import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const CharacterPage = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(params);
  console.log(searchParams.get("name"));

  return <div>CharacterPage</div>;
};
