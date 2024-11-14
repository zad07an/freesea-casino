import search from "@/assets/resources/search.svg";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Search = ({ className }: Props) => {
  return (
    <div
      className={cn(
        " w-full flex items-center border border-white/5 rounded-xl px-4 bg-[#212933]",
        className
      )}
    >
      <div className="size-4 aspect-square flex items-center justify-center">
        <img
          src={search}
          alt="search icon"
          className=" object-contain"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
      <Input
        type="search"
        className=" w-full outline-none bg-transparent"
        placeholder="Search"
      />
    </div>
  );
};
