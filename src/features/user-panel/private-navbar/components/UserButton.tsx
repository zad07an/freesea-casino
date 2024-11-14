import { ChevronDown } from "lucide-react";

export const UserButton = () => {
  return (
    <div className=" relative w-fit h-fit">
      <div className=" text-[18px] font-black flex items-center justify-center bg-primary-blue border-2 border-primary-background size-10 aspect-square rounded-full">
        A
      </div>
      <button className=" absolute -bottom-0 -right-0 size-[20px] bg-primary-icon-background aspect-square rounded-full flex items-center justify-center">
        <ChevronDown size={16} className="text-primary-icon" />
      </button>
    </div>
  );
};
