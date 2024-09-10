import React, { useState } from "react";
import { User } from "../models/users.models";
import defaultimg from "../assets/defaultUser.jpg";

interface Props {
  user: User;
}

const UserCard: React.FC<Props> = ({ user }) => {
  const [imageError, setImageError] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const imageUrl = `/images/${user.image}`;

  return (
    <div
      className={`flex flex-row max-w-sm rounded-md border-2 overflow-hidden shadow-lg p-4 mx-4 md:mx-0 transition-colors ${
        isSelected ? "border-red-600" : "border-zinc-300"
      }`}
      onClick={() => setIsSelected(!isSelected)}
    >
      <img
        className="rounded-full object-cover size-36"
        width={150}
        height={150}
        src={imageError || !user.image ? defaultimg : imageUrl}
        alt={user.name}
        onError={() => setImageError(true)}
      />
      <div className="flex flex-col px-2 py-4 text-zinc-300">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <p className="text-base">{user.role || "No especificado"}</p>
        <p className="text-base">{user.email || "Sin email"}</p>
      </div>
    </div>
  );
};

export default UserCard;
