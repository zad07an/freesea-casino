import { Button } from "@/components/ui/Button";
import { HeroImages } from "./HeroImages";

export const Hero = () => {
  return (
    <div className=" w-full h-full flex pl-44">
      <div className=" w-full basis-1/3 flex flex-col gap-4">
        <h1 className="uppercase text-[64px] font-black text-transparent bg-clip-text bg-blue-gradient leading-tight">
          The First
          <br /> Web3 Gaming
          <br />{" "}
          <div className=" flex items-center gap-4">
            Platform
            <Button className=" text-[20px] h-[60px] w-[116px] uppercase bg-blue-gradient rounded-xl">
              Play
            </Button>
          </div>
        </h1>
        <p className=" text-[28px] font-black uppercase mt-2">
          <span className=" text-primary-red">Play</span> against a smart
          <br />
          contract and <span className="text-primary-red">win</span> every
          <br />
          minute.
        </p>
        <span className="text-primary-icon">
          Nesob - a fully automated blockchain gaming platform with smart
          contract-based games
        </span>
      </div>
      <HeroImages className="basis-1/2 relative flex items-center justify-center" />
    </div>
  );
};
