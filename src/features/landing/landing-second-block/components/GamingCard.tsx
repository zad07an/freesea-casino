import gaming from "@/assets/resources/image 64.svg";
import { Button } from "@/components/ui/Button";

export const GamingCard = () => {
  return (
    <div className=" w-fit max-w-sm p-[2px] rounded-xl bg-blue-gradient z-10">
      <div className=" w-fit px-4 pb-8 pt-1 flex flex-col gap-4 bg-[#161F2C] rounded-xl">
        <img
          src={gaming}
          alt="gaming"
          width={316}
          height={269}
          className=" mx-auto"
        />
        <div className=" w-full h-fit flex flex-col gap-2">
          <p className=" text-[26px] font-black uppercase">Nesob Gaming</p>
          <p className=" text-sm font-semibold">
            Nesob is a fully decentralized gaming platform offering provably
            fair gambling, creating a chain of chance.
          </p>
        </div>
        <Button className=" w-fit font-semibold bg-blue-gradient uppercase mt-24">
          Play
        </Button>
      </div>
    </div>
  );
};
