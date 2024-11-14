import { ListItems } from "@/components/ListItems";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { LIVE_WINNERS } from "../constants/live-winners";
import { LiveWinnerItem } from "./LiveWinnerItem";

export const MobileLiveWinners = () => {
  const [innerWidth, setInnerWidth] = useState<number>(320);

  useEffect(() => {
    const getInnerWidth = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth > 1000) {
        setInnerWidth(innerWidth - 400);
      } else {
        setInnerWidth(innerWidth - 80);
      }
    };
    window.addEventListener("resize", getInnerWidth);
    return () => {
      window.removeEventListener("resize", getInnerWidth);
    };
  }, [window]);

  // if (!innerWidth) return;

  return (
    <div className="w-full h-fit xl:hidden flex flex-col bg-primary-header p-4 rounded-xl">
      <p className="w-fit font-inter italic font-black text-[20px] mb-4">
        Live Winners
      </p>
      {/* <div
        className=" w-full overflow-auto max-w-lg"
        // style={{ maxWidth: innerWidth }}
      >
        <p className=" whitespace-nowrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          iste nobis culpa praesentium, corporis amet, explicabo impedit a ullam
          blanditiis non enim provident recusandae voluptatum sint reprehenderit
          perspiciatis eveniet sunt.
        </p>
      </div> */}
      <Carousel opts={{ align: "start", loop: false }}>
        <CarouselContent style={{ maxWidth: innerWidth }}>
          <ListItems
            items={LIVE_WINNERS}
            render={(item) => (
              <CarouselItem key={item.id} className="max-w-56">
                <LiveWinnerItem item={item} />
              </CarouselItem>
            )}
          />
        </CarouselContent>
      </Carousel>
    </div>
  );
};
