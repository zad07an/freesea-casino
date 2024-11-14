import { ListItems } from "@/components/ListItems";
import { GAMES } from "../constants/games";

export const Games = () => {
  return (
    <div className=" w-full flex flex-col gap-16 pt-8 pb-24">
      <div className="w-fit relative">
        <p className=" text-[32px] font-semibold">Games</p>
        <span className=" absolute top-2 -right-3">5</span>
      </div>
      <div className="w-full h-fit grid grid-cols-128 gap-x-6 gap-y-20">
        <ListItems
          items={GAMES}
          render={(item) => (
            <div
              key={item.id}
              className="w-full rounded-xl h-fit flex items-center flex-col relative"
            >
              <div className=" absolute -top-1/4 left-1/2 -translate-x-1/2 size-32 aspect-square flex items-center justify-center">
                <img src={item.icon} alt={item.name} className="object-cover" />
              </div>
              <img src={item.oval} alt="" className=" rounded-xl" />
              <div className=" w-full flex flex-col gap-1 items-center text-center">
                <p className=" 2xl:text-[36px] lg:text-[28px] text-[24px] font-black">
                  {item.name}
                </p>
                <p className=" lg:text-[18px]">{item.players}</p>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
