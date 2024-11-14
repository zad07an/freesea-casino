import { ListItems } from "@/components/ListItems";
import { COIN_ITEMS } from "../constants/coins";

export const Coins = () => {
  return (
    <section className=" w-full max-w-screen-lg mx-auto">
      <div className=" w-full grid grid-cols-6 py-2 border-y-2 border-[#505050]">
        <ListItems
          items={COIN_ITEMS}
          render={(item, index) => (
            <div
              key={index}
              className=" w-full aspect-video flex items-center justify-center"
            >
              <img src={item} alt={item} className=" object-contain" />
            </div>
          )}
        />
      </div>
    </section>
  );
};
