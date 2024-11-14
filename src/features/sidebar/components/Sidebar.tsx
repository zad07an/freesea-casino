import { ListItems } from "@/components/ListItems";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import { SIDEBAR_ITEMS } from "../constants/sidebar-items";
import { SidebarItem } from "./SidebarItem";
import { ScrollArea } from "@/components/ui/scroll-area";

export const Sidebar = () => {
  const { isOpenSidebar } = useSidebarStore();

  return (
    <aside className={cn("lg:block hidden min-w-56 sticky top-0")}>
      <ScrollArea className="h-[640px] sticky top-0 rounded-br-xl">
        <div
          className={cn(
            " p-3 w-56 transition-all shadow-md h-full duration-300 rounded-br-xl bg-primary-navbar",
            !isOpenSidebar && "w-[72px] bg-transparent"
          )}
        >
          <ul className=" w-full h-fit flex flex-col gap-4">
            <ListItems
              items={SIDEBAR_ITEMS}
              render={(item) => <SidebarItem key={item.id} item={item} />}
            />
          </ul>
        </div>
      </ScrollArea>
    </aside>
  );
};
