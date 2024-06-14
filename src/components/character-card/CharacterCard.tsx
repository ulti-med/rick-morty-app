import { Link } from "react-router-dom";
import { Gender, Status } from "../../types/character";
import "./CharacterCard.css";
import { clsx } from "clsx";

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
    <Link to={`/character/${id}`} className="card">
      <img src={image} alt="" className="card__image" />
      <div className="card__overlay">
        <h2 className="card__title">{name}</h2>
        <span className="card__gender">Gender:{getGenderEmoji(gender)}</span>
        <div className="card__status">
          <span>Status:</span>
          {/* <div className={`card__status-circle ${getStatusColor(status)}`} /> */}
          <div
            className={clsx("card__status-circle", getStatusColor(status))}
          />
        </div>
      </div>
    </Link>
  );
};

{
  /* <Link to={`/character/${id}`} className="card">
      <Card
        sx={{
          borderRadius: 5,
          backgroundColor: "#4C4C4C",
          pb: "5px",
          maxHeight: "450px",
        }}
      >
        <img src={image} alt="" />
        <h2>{name}</h2>
        <div>
          <span>Gender:{getGenderEmoji(gender)}</span>
        </div>
        <div>
          Status:{" "}
          <CircleIcon
            sx={{
              color: getStatusColor(status),
              alignItems: "center",
              verticalAlign: "middle",
            }}
          />
        </div>
      </Card>
    </Link> */
}
