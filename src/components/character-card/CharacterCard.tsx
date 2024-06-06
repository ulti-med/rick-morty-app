import { Link } from "react-router-dom";
import { Gender, Status } from "../../types/character";

export interface IProps {
  id: number;
  image: string;
  name: string;
  gender: Gender;
  status: Status;
}
const getGenderEmoji = (gender: Gender) => {
  if (gender === "Female") return "💅";
  if (gender === "Male") return "👊";
  if (gender === "Genderless") return "👽";
  return "🧩";
};

const getStatusColor = (status: Status) => {
  if (status === "Alive") return "green";
  if (status === "Dead") return "yellow";
  return "red";
};

export const CharacterCard = ({ id, image, name, gender, status }: IProps) => {
  return (
    <Link to={`/character/${id}`}>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <div>
        <span>Gender: {getGenderEmoji(gender)}</span>
      </div>
      <div>Status: {getStatusColor(status)} </div>
    </Link>
  );
};
