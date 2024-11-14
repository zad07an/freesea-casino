import { ListItems } from "@/components/ListItems";
import { LIVE_WINNERS } from "../constants/live-winners";
import { LiveWinnerItem } from "./LiveWinnerItem";

export const LiveWinners = () => {
  return (
    <div className="hidden w-72 h-[640px] xl:flex flex-col gap-3 overflow-y-auto bg-primary-navbar p-4 rounded-xl">
      <p className=" font-inter italic font-black text-[20px]">Live Winners</p>
      <div className=" w-full flex flex-col gap-2">
        <ListItems
          items={LIVE_WINNERS}
          render={(item) => <LiveWinnerItem key={item.id} item={item} />}
        />
      </div>
    </div>
  );
};
