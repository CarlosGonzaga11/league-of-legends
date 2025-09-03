/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { FetchChampions } from "../../../hooks/useChampions";
import CardChampion from "../../card";

import { CiFilter } from "react-icons/ci";

export default function Champions() {
  const roles = ["Assassin", "Fighter", "Mage", "Marksman", "Support"];
  const { data: champions, isLoading, isError } = FetchChampions();
  const [filterIsOpen, setFilterIsOpen] = useState<boolean>(false);
  const [roleSelected, setRoleSelected] = useState<string>();
  const [search, setSearch] = useState<string>();
  function searchChampions(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    console.log(search);
  }
  function openFilter() {
    setFilterIsOpen(!filterIsOpen);
  }

  const champsArray = champions ? Object.values(champions.data) : [];
  const searchArray = search
    ? champsArray.filter((champ) =>
        champ.name.toUpperCase().includes(search.toUpperCase())
      )
    : champsArray;

  const filteredChampions = roleSelected
    ? champsArray.filter((champ) => champ.tags.includes(roleSelected))
    : champsArray;

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar campeões.</p>;

  return (
    <section className="px-5 py-4 flex gap-6 flex-col mx-auto max-w-7xl bg-[linear-gradient(135deg,hsl(210_15%_8%),hsl(213_20%_12%))]">
      <div className=" text-white w-full  z-100 ">
        <input
          className="pl-3 w-full border border-[hsl(210_15%_20%)] rounded-4xl 
               focus:border-transparent focus:outline-1 focus:outline-amber-300"
          placeholder="Search champions..."
          type="text"
          value={search}
          onChange={(event) => searchChampions(event)}
        ></input>
      </div>

      <div className="text-white z-100">
        <div className="flex items-center gap-1 mb-2 cursor-pointer w-15">
          <button
            className="cursor-pointer flex items-center gap-1 border border-[hsl(210_15%_20%))] rounded-xl  px-2"
            onClick={() => openFilter()}
          >
            <CiFilter />
            Filter
          </button>
        </div>

        {filterIsOpen && (
          <div className="border border-[hsl(210_15%_20%))] rounded-xl flex flex-col p-3 gap-3 transition-all duration-300">
            <div>Champion Roles</div>

            <div className="flex flex-wrap flex-row gap-2 text-[8px] ld:text-sm">
              {roles.map((role) => (
                <span
                  className={`border rounded-full px-1  hover:border-amber-200 cursor-pointer transition-all duration-300 ${
                    roleSelected === role
                      ? "bg-amber-300 text-black  border-[hsl(210_15%_20%))] "
                      : "bg-black"
                  }`}
                >
                  <button
                    onClick={() =>
                      setRoleSelected((prev) =>
                        prev === role ? undefined : role
                      )
                    }
                  >
                    {role}
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
        {(search === "" && roleSelected !== " "
          ? filteredChampions
          : searchArray
        ).map((champion: any) => (
          <CardChampion
            key={champion.id}
            id={champion.id}
            name={champion.name}
            image={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
            title={champion.title}
            info={champion.info}
            tag={champion.tags}
          />
        ))}
      </div>
    </section>
  );
}
