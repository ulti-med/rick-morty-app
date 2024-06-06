export interface ICharacterList {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export type Gender = "Female" | "Male" | "Genderless" | "unknown";
export type Status = "Alive" | "Dead" | "unknown";
type Location = {
  name: string;
  url: string;
};
