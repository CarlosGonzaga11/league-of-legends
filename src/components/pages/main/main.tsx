import { LuSword } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import Champions from "../champions";

export default function Main() {
  return (
    <div className="font-serif relative min-h-screen bg-[linear-gradient(135deg,_rgba(13,34,41,1)_12%,_rgba(105,104,62,1)_74%,_rgba(179,170,93,1)_100%)]">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-blue-950/5"></div>
      <div className=" flex flex-col text-center items-center justify-center w-full h-full pt-8 gap-4">
        <div className="mt-2 border border-[hsl(212,17%,50%)] rounded-full p-1 flex items-center justify-center gap-1.5 pl-2 font-cinzel text-white">
          <BsStars className="text-amber-300 " />
          <span className="text-[8px] md:text-sm ">
            League of Legends Champion Directory
          </span>
        </div>
        <div className="text-center text-4xl sm:text-5xl font-bold">
          <span className="text-amber-300 ">Choose Your</span>
          <br />
          <span className="text-white">Champion</span>
        </div>
        <div className=" flex items-center justify-center text-center flex-col max-w-4xl gap-8 px-2">
          <p className="flex flex-wrap text-white text-[8px] sm:text-xs md:text-xl">
            Discover the perfect champion for your playstyle. Explore detailed
            abilities, stats, and lore from the world of Runeterra.
          </p>

          <div className="pb-28 text-xs md:text-xl flex gap-3 items-center justify-center text-white px-3 mb-6">
            <div className="flex gap-1  items-center justify-center ">
              <span>
                <LuSword className="text-amber-300 " />
              </span>
              <p>160+ champion</p>
            </div>
            <div className="flex gap-1  items-center justify-center ">
              <span>
                <MdOutlineShield className="text-blue-500 " />
              </span>
              <p className="">6 roles</p>
            </div>
            <div className="flex gap-1  items-center justify-center 0">
              <span>
                <BsStars className="text-blue-500 " />
              </span>
              <p>Endless Possibilities</p>
            </div>
          </div>
        </div>
      </div>
      <Champions />
    </div>
  );
}
