import React from "react";

type Gender = "Female" | "Male" | "Genderless" | "unknown";

interface IProps {
  image: string;
  name: string;
  gender: Gender;
  status: "Alive" | "Dead" | "unknown";
}
const getGenderEmoji = (gender: Gender) => {
  if (gender === "Female") return "😀";
  if (gender === "Male") return "M";
  if (gender === "Genderless") return "G";
  return "U";
};

export const CharacterCard = ({ image, name, gender, status }: IProps) => {
  return (
    <div>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <div>
        <span>Gender:</span>
        <span>{getGenderEmoji(gender)}</span>
      </div>
    </div>
  );
};
