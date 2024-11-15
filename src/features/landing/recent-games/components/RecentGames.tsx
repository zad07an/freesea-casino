import { ListItems } from "@/components/ListItems";
import { RECENT_GAMES } from "../constants/recent-games";
import { cn } from "@/lib/utils";

export const RecentGames = () => {
  return (
    <section className=" w-full py-10 px-5 h-fit flex flex-col items-center gap-6">
      <h3 className=" text-[24px] font-bold text-[#E8D0D0]">Recent Games:</h3>
      {/* table  */}
      <div className=" w-full max-w-screen-lg p-6 bg-[#161F2C] rounded-xl overflow-y-hidden overflow-x-auto">
        <div className=" w-full min-w-[768px] flex flex-col gap-4">
          <div className=" grid grid-cols-5 font-black text-[18px] whitespace-nowrap">
            <p className=" whitespace-nowrap line-clamp-1">Games</p>
            <p className=" whitespace-nowrap line-clamp-1">Username</p>
            <p className=" whitespace-nowrap line-clamp-1">Bet Amount</p>
            <p className=" whitespace-nowrap line-clamp-1">Multiplier</p>
            <p className=" whitespace-nowrap line-clamp-1">Payout</p>
          </div>
          <div className="min-w-full w-full h-fit flex flex-col gap-4">
            <ListItems
              items={RECENT_GAMES}
              render={(item) => (
                <div
                  key={item.id}
                  className=" w-full h-fit grid grid-cols-5 font-semibold whitespace-nowrap"
                >
                  <div className=" w-full flex items-center gap-2">
                    <div className=" size-5 aspect-square">
                      <img
                        src={item.icon}
                        alt={item.icon}
                        className=" object-cover"
                      />
                    </div>
                    <p className=" line-clamp-1 whitespace-nowrap">
                      {item.game_name}
                    </p>
                  </div>
                  <div>
                    <p className="line-clamp-1 whitespace-nowrap">
                      {item.username}
                    </p>
                  </div>
                  <div>
                    <p className="line-clamp-1 whitespace-nowrap">
                      ${item.bet_amount}
                    </p>
                  </div>
                  <div>
                    <p className="line-clamp-1 whitespace-nowrap">
                      x{item.multiplier}
                    </p>
                  </div>
                  <div>
                    <p
                      className={cn(
                        "line-clamp-1 whitespace-nowrap",
                        item.payout > 0 && "text-primary-green"
                      )}
                    >
                      x{item.payout}
                    </p>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
