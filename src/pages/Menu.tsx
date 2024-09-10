import React, { useEffect, useState } from "react";
import { users } from "../users";
import { User } from "../models/users.models";
import UserCard from "../components/UserCard";

export const Menu: React.FC = () => {
  const [searchUsers, setSearchUsers] = useState<string>("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

  useEffect(() => {
    const searchWords = searchUsers.trim().split(/\s+/);

    const filtered = users.filter((user) => {
      return searchWords.some((word) => {
        return user.name.toLocaleLowerCase().includes(word.toLocaleLowerCase());
      });
    });

    setFilteredUsers(filtered);
  }, [searchUsers]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-cente text-4xl text-slate-300">Usarios</h1>
      <div className="flex flex-row w-full justify-center items-center my-6">
        <input
          type="text"
          placeholder="Buscar usuarios"
          value={searchUsers}
          onChange={(e) => {
            setSearchUsers(e.target.value);
          }}
          className="w-[250px] px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-500"
        />
      </div>
      <div>
        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredUsers.map((user: User) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};
