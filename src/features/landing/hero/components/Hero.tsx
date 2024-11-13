import { Button } from "@/components/ui/Button";
import { HeroImages } from "./HeroImages";

export const Hero = () => {
  return (
    <div className=" w-full h-full flex lg:flex-row flex-col xl:pl-44 lg:pl-32 md:pl-20 sm:pl-8 px-5">
      <div className=" w-full basis-1/3 flex flex-col gap-4">
        <h1 className="uppercase xl:text-[64px] lg:text-[60px] sm:text-[56px] text-[48px] font-black text-transparent bg-clip-text bg-blue-gradient leading-tight">
          The First
          <br /> Web3 Gaming
          <br />{" "}
          <div className=" flex items-center gap-4">
            Platform
            <Button className=" text-[20px] md:h-[60px] h-[44px] w-[116px] uppercase bg-blue-gradient rounded-xl">
              Play
            </Button>
          </div>
        </h1>
        <p className=" md:text-[28px] text-[20px] font-black uppercase mt-2">
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
      <HeroImages className="w-full max-w-screen-sm md:mx-0 mx-auto lg:mt-0 mt-20 lg:aspect-auto aspect-video lg:basis-1/2 relative flex items-center justify-center" />
    </div>
  );
};
