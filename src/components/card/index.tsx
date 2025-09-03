import { useNavigate } from "react-router-dom";
type CardChampionProps = {
  name: string;
  key: string;
  image: string;
  title: string;
  info: {
    attack: number;
    defense: number;
    difficulty: number;
    magic: number;
  };
  tag: string[];
  id: number;
};

export default function CardChampion({
  name,
  image,
  title,
  info,
  tag,
  id,
}: CardChampionProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/champion/${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={handleClick}
      className=" relative group border  border-[hsl(210_15%_20%))] rounded-xl max-w-24 sm:max-w-xs w-full hover:border-amber-300 hover:scale-[1.01] "
    >
      <div className="absolute left-0.5 top-1 w-fit p-1 text-[8px]  gap-1 flex flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-100">
        {tag?.map((t) => (
          <span
            className=" px-1.5 bg-gray-900 border rounded-2xl text-amber-300 "
            key={t}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="">
        <img className="border rounded-t-2xl" src={image} />
      </div>
      <div className="pl-2 h-24 pt-2">
        <span className="text-xs text-white ">{name}</span>
        <p className="opacity-70 text-gray-300 text-xs">{title}</p>
        <span className="text-amber-300 opacity-45 text-xs">
          difficulty:{info.difficulty}
        </span>
      </div>

      <div className="absolute inset-0 bg-black/80 rounded-2xl flex items-center justify-center text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex flex-col items-center justify-center text-xs">
          <span>Attack: {info.attack}</span>
          <span>Defense: {info.defense}</span>
          <span>Magic: {info.magic}</span>
          <span>Difficulty: {info.difficulty}</span>
        </div>
      </div>
    </div>
  );
}
