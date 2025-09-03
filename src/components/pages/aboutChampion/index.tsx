import { Link, useParams } from "react-router-dom";
import { useChampionsContext } from "../../../hooks/championContext";

import { IoIosArrowRoundBack } from "react-icons/io";
import { LuSword } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";
import { BsMagic } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { GiLampreyMouth } from "react-icons/gi";
export default function AboutChampion() {
  const { champions, isLoading } = useChampionsContext();
  const { id } = useParams();

  if (!id) return <p>ID do campeão não fornecido</p>;
  if (isLoading) return <p>Carregando campeões...</p>;

  const champion = champions.find((c) => c.id === id);
  if (!champion) return <p>Campeão não encontrado</p>;

  return (
    <div className="relative min-h-screen font-serif">
      <section
        className="relative w-full min-h-screen flex items-start justify-start px-4  flex-col sm:gap-32 gap-36 bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg)`,
        }}
      >
        <div
          className=" z-50 border rounded-full text-white 
  hover:border-amber-200 cursor-pointer transition-300  relative top-5"
        >
          <Link
            to="/"
            className="text-xs md:text-sm px-2 flex items-center gap-1"
          >
            <IoIosArrowRoundBack className="text-xl" />
            Back to Champions
          </Link>
        </div>
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-96">
          <h1 className="text-4xl md:text-8xl font-bold mb-2 text-white">
            {champion.name}
          </h1>
          <h2 className="text-xs md:text-3xl text-amber-500 font-medium mb-2">
            {champion.title.toUpperCase()}
          </h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            {champion.blurb}
          </p>
        </div>
      </section>

      <section className="py-12 px-4 items-center justify-center  bg-[#0f1114]  ">
        <div className="sm:gap-9  gap-3  max-w-7xl w-full flex flex-col bg-[#1c1f22] py-8 border border-[#272525] rounded-2xl">
          <p className="text-center sm:text-xl md:text-3xl font-bold text-white">
            Champion Statistics
          </p>
          <div className="grid border sm:grid-cols-4  justify-center items-center grid-cols-2 gap-3 w-full  font-bold">
            <div className="flex flex-col justify-center text-amber-300 items-center text-center  gap-2 sm:text-2xl text-xs">
              <LuSword />
              <p>{champion.info.attack}</p>
              <p className=" text-[#fff] opacity-55 font-normal  sm:text-2xl text-xs">
                Attack
              </p>
            </div>
            <div className="flex flex-col justify-center text-blue-500 items-center text-center  gap-2  sm:text-2xl text-xs">
              <MdOutlineShield />
              <p>{champion.info.defense}</p>
              <p className="text-[#fff] opacity-55 font-normal  sm:text-2xl text-xs">
                Defense
              </p>
            </div>
            <div className="flex flex-col justify-center text-blue-500 items-center text-center  gap-2  sm:text-2xl text-xs">
              <BsMagic />
              <p>{champion.info.magic}</p>
              <p className="text-[#fff] opacity-55 font-normal  sm:text-2xl text-xs">
                Magic
              </p>
            </div>
            <div className="flex flex-col justify-center  text-white items-center text-center  gap-2  sm:text-2xl text-xs">
              <CiStar />
              <p> {champion.info.difficulty}</p>
              <p className="text-[#fff] opacity-55 font-normal  sm:text-2xl text-xs ">
                Difficult
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 px-4 flex items-center justify-center bg-[#0f1114]">
        <div className="gap-9 max-w-7xl w-full flex flex-col bg-[#1c1f22] py-2 border border-[#272525] rounded-2xl">
          <p className="text-center text-xl sm:text-2xl text-white font-bold">
            Detailed Statistic
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div>
              <div className="flex gap-2 items-center pl-2">
                <CiHeart className="text-red-500 text-2xl" strokeWidth={1.5} />
                <h1 className="text-xl sm:text-2xl text-white">
                  Health & Sustain
                </h1>
              </div>
              <div className="flex gap-10 pl-3">
                <div className="text-[8px] sm:text-xs text-gray-300 opacity-70 flex flex-col gap-2">
                  <p>Health:</p>
                  <p>Health Regen:</p>
                  <p>Mana:</p>
                  <p>Mana Regen:</p>
                </div>
                <div className=" text-[8px] sm:text-xs flex flex-col text-white gap-2">
                  <span>
                    {champion.stats.hp} ({champion.stats.hpperlevel}/level)
                  </span>
                  <span>
                    {champion.stats.hpregen} ({champion.stats.hpregenperlevel}
                    /level)
                  </span>
                  <span>
                    {champion.stats.mp} ({champion.stats.mpperlevel}/level)
                  </span>
                  <span>
                    {champion.stats.mpregen} ({champion.stats.mpregenperlevel}
                    /level)
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center pl-2">
                <GiLampreyMouth
                  className="text-amber-400 text-2xl"
                  strokeWidth={1.5}
                />
                <h1 className="text-xl sm:text-2xl text-white">Combat Stats</h1>
              </div>
              <div className="flex gap-10 pl-3">
                <div className=" text-[8px] sm:text-xs text-gray-300 opacity-70 flex flex-col gap-2">
                  <p>Attack Damage:</p>
                  <p>Attack Speed:</p>
                  <p>Attack Range:</p>
                  <p>Critical Strike:</p>
                </div>
                <div className="flex flex-col text-white gap-2 text-[8px] sm:text-xs">
                  <span className="flex items-center">
                    {champion.stats.attackdamage} (+
                    {champion.stats.attackdamageperlevel}/level)
                  </span>
                  <span>
                    {champion.stats.attackspeed} (+
                    {champion.stats.attackspeedperlevel}/level)
                  </span>
                  <span>
                    {champion.stats.attackrange} (+{champion.stats.attackrange}
                    /level)
                  </span>
                  <span>
                    {champion.stats.crit} (+{champion.stats.critperlevel}/level)
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-2 items-center pl-2">
                <MdOutlineShield className="text-blue-500 text-2xl" />
                <h1 className="text-xl sm:text-2xl text-white">
                  Defensive Stats
                </h1>
              </div>
              <div className="text-[8px] sm:text-xs flex gap-10 pl-3">
                <div className="text-gray-300 opacity-70 flex flex-col gap-2">
                  <p>Armor:</p>
                  <p>Magic Resist:</p>
                  <p>Move Speed:</p>
                </div>
                <div className="text-[8px] sm:text-xs flex flex-col text-white gap-2">
                  <span>
                    {champion.stats.armor} (+{champion.stats.armorperlevel}
                    /level)
                  </span>
                  <span>
                    {champion.stats.spellblock} (+
                    {champion.stats.spellblockperlevel}/level)
                  </span>
                  <span>{champion.stats.movespeed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
