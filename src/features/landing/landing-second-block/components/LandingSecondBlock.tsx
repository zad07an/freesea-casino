import strips from "@/assets/resources/left-strips 2.svg";
import { GamingCard } from "./GamingCard";

export const LandingSecondBlock = () => {
  return (
    <section className=" w-full h-fit relative overflow-hidden bg-[#161F2C] flex items-center justify-center">
      <img
        src={strips}
        alt="strips"
        width={548}
        height={623}
        className=" absolute -bottom-20 right-0 z-10"
      />
      <img
        src={strips}
        alt="strips"
        width={548}
        height={623}
        className=" absolute -bottom-20 scale-x-[-1] left-0 z-10"
      />
      <div className=" w-fit inline-flex items-center justify-center flex-wrap gap-20 px-10 py-20">
        <GamingCard />
        <GamingCard />
      </div>
    </section>
  );
};
