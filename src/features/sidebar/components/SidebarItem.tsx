import { ListItems } from "@/components/ListItems";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { SidebarDataProps } from "../types/definitions";
import { SidebarSubitem } from "./SidebarSubitem";

interface Props {
  item: SidebarDataProps;
}

export const SidebarItem = ({ item }: Props) => {
  const [showSubItems, setShowSubItems] = useState<boolean>(false);
  const { isOpenSidebar } = useSidebarStore();

  const onToggle = () => {
    setShowSubItems((prev) => !prev);
  };
  return (
    <li
      className={cn(
        " p-3 flex flex-col gap-4 bg-primary-icon-background rounded-xl",
        item.subItems.length > 0 && "bg-[#222A34]"
      )}
    >
      <div className=" w-full h-full flex items-center justify-between gap-4">
        <div className=" w-full h-fit flex items-center gap-1">
          <div className=" size-[26px] aspect-square rounded-full flex items-center justify-center bg-primary-header">
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className=" object-contain"
            />
          </div>
          <p
            className={cn(
              " line-clamp-1 whitespace-nowrap text-sm font-semibold transition-all",
              !isOpenSidebar && "opacity-0"
            )}
          >
            {item.name}
          </p>
        </div>
        {item.subItems.length > 0 && (
          <button
            onClick={onToggle}
            className=" size-5 flex items-center justify-center aspect-square rounded-full bg-primary-navbar"
          >
            <ChevronDown
              size={12}
              className={cn(
                "transition-all duration-300",
                showSubItems && "rotate-180"
              )}
            />
          </button>
        )}
      </div>
      {showSubItems && item.subItems.length > 0 && (
        <ul className="flex flex-col gap-3 w-full h-fit">
          <ListItems
            items={item.subItems}
            render={(subItem) => (
              <SidebarSubitem key={subItem.id} item={subItem} />
            )}
          />
        </ul>
      )}
    </li>
  );
};
