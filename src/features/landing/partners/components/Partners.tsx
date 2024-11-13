import { ListItems } from "@/components/ListItems";
import cn from "@/lib/utils";
import { COINS_IMAGES, COINS_WITH_LABELS } from "../constants/coins";
import { CoinWithLabel } from "./CoinWithLabel";

export const Partners = () => {
  return (
    <section className=" w-full flex items-center justify-center flex-col gap-4 md:pt-24 pb-10 pt-48">
      <h2 className=" text-[20px] font-black">Works with:</h2>
      <div className=" w-full h-fit flex items-center justify-center flex-wrap gap-x-10 gap-y-6">
        <ListItems
          items={COINS_WITH_LABELS}
          render={(item) => (
            <CoinWithLabel
              key={item.label}
              image={item.image}
              ringColor={item.ringColor}
              label={item.label}
            />
          )}
        />

        <div className=" w-32 h-10 relative flex items-center justify-start">
          <ListItems
            items={COINS_IMAGES}
            render={(item, index) => (
              <img
                key={item}
                src={item}
                alt="coin 5"
                style={{ zIndex: -(index * 2), left: `${index * 18}px` }}
                className={cn(
                  "absolute size-[30px] aspect-square",
                  `left-[${index * 4}px]`
                )}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
};
