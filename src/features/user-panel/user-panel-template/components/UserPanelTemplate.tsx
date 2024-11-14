import { Search } from "@/components/Search";
import { Games } from "../../games/components/Games";
import { UserPanelHero } from "../../hero/components/UserPanelHero";
import { LiveWinners } from "../../live-winners/components/LiveWinners";
import { MobileLiveWinners } from "../../live-winners/components/MobileLiveWinners";

export const UserPanelTemplate = () => {
  return (
    <section className=" w-full h-full flex gap-6 2xl:pr-24 xl:pr-16 lg:pr-8 px-4">
      <div className=" grow h-full flex basis-1 flex-col gap-6">
        <MobileLiveWinners />
        <UserPanelHero />
        <Search className="bg-[#12171F]" />
        <Games />
      </div>
      <LiveWinners />
    </section>
  );
};
