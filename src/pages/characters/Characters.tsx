import { ChangeEvent, useState } from "react";
import {
  CharacterCard,
  IProps,
} from "../../components/character-card/CharacterCard";
import { Search } from "../../components/search/Search";
import { useCharacters } from "../../shared/hooks/useCharacters";
import { useDebounce } from "../../shared/hooks/useDebounce";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Grid } from "@mui/material";

export const Characters = () => {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue, 500);
  const { data, isLoading } = useCharacters(debounceValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Search inputValue={inputValue} onChange={handleChange} />
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
      <Grid container spacing={10}>
        {data?.results &&
          Array.isArray(data.results) &&
          data.results.map((result: IProps) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={result.image}
                sx={{
                  marginTop: "20px",
                }}
              >
                <CharacterCard
                  id={result.id}
                  image={result.image}
                  name={result.name}
                  gender={result.gender}
                  status={result.status}
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};
