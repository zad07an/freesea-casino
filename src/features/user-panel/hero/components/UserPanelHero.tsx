import { ListItems } from "@/components/ListItems";
import { Button } from "@/components/ui/CustomButton";
import { useState } from "react";
import { HERO_IMAGES, HERO_ITEMS } from "../constants/hero-items";
import { cn } from "@/lib/utils";

export const UserPanelHero = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  const onChangeIndex = (index: number) => {
    if (
      index > HERO_IMAGES.length - 1 ||
      index > HERO_ITEMS.length - 1 ||
      index < 0 ||
      activeIndex === index
    ) {
      return;
    }
    setFade(false);
    setTimeout(() => {
      setFade(true);
      setActiveIndex(index);
    }, 300);
  };

  return (
    <div className=" w-full h-96 overflow-hidden relative">
      <img
        src={HERO_IMAGES[activeIndex]}
        alt="hero image"
        className={cn(
          "w-full h-full rounded-xl object-cover transition duration-500",
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        )}
      />
      <div className=" absolute top-0 left-0 p-8">
        <p className=" md:text-[36px] xs:text-[32px] text-[28px] font-black text-primary-red uppercase">
          Welcome bonus
        </p>
        <p className="md:text-[32px] xs:text-[28px] text-[24px] font-[700] uppercase">
          Up to 590%
        </p>
        <p className=" md:text-[28px] xs:text-[24px] text-[20px] font-semibold">
          +225 free Spins
        </p>
        <Button className=" mt-4 md:w-[169px] w-[129px] md:h-[48px] h-[44px] md:text-[24px] text-[18px] font-semibold bg-primary-red rounded-xl">
          Go
        </Button>
      </div>
      <div className=" absolute flex items-center justify-between px-6 bottom-0 left-0 w-full z-20 backdrop-blur-md h-16 rounded-b-xl">
        <div className=" w-fit flex items-center gap-4">
          <ListItems
            items={HERO_ITEMS}
            render={(item, index) => (
              <div
                key={item.label + index}
                className="cursor-pointer w-fit relative"
                onClick={() => onChangeIndex(index)}
              >
                <p className=" text-sm font-[700]">{item.label}</p>
                <div
                  data-active={activeIndex === index}
                  className=" absolute -bottom-3 left-0 data-[active=true]:opacity-100 data-[active=true]:scale-x-100 scale-x-0 opacity-0 z-10 w-full h-1 bg-primary-blue rounded-full transition-all duration-500"
                ></div>
              </div>
            )}
          />
        </div>
        <div className=" w-fit flex items-center gap-2">
          <ListItems
            items={HERO_ITEMS}
            render={(_, index) => (
              <div
                key={index}
                onClick={() => onChangeIndex(index)}
                data-active={activeIndex === index}
                className="cursor-pointer size-[10px] data-[active=true]:bg-primary-blue aspect-square rounded-full bg-[#2A3546] transition-all duration-500"
              ></div>
            )}
          />
        </div>
      </div>
    </div>
  );
};
