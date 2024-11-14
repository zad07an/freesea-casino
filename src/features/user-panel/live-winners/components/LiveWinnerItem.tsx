import { cn } from "@/lib/utils";
import { LiveWinnersDataProps } from "../types/definitions";

interface Props {
  item: LiveWinnersDataProps;
}

export const LiveWinnerItem = ({ item }: Props) => {
  return (
    <div
      className={cn(
        " w-full h-[50px] pl-1 pr-4 rounded-xl flex items-center justify-between gap-4 bg-primary-background first:bg-primary-icon-background whitespace-nowrap"
      )}
    >
      <div className=" w-full flex items-center gap-1">
        <div className=" size-[40px] flex items-center justify-center aspect-square rounded-xl first:bg-primary-header bg-primary-icon-background">
          <img src={item.icon} alt={item.game} className=" object-contain" />
        </div>
        <div className=" flex flex-col">
          <p className=" font-semibold">{item.game}</p>
          <span className=" font-medium text-[12px]">{item.username}</span>
        </div>
      </div>
      <div>
        <p className=" text-sm font-[700]">{item.price}</p>
      </div>
    </div>
  );
};
