import { ActiveLink } from "@/components/ActiveLink";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import { SidebarSubitemsDataProps } from "../types/definitions";
import { useLocation } from "react-router-dom";

interface Props {
  item: SidebarSubitemsDataProps;
}

export const SidebarSubitem = ({ item }: Props) => {
  const { isOpenSidebar } = useSidebarStore();
  const { pathname } = useLocation();
  const isActive = pathname === item.href;

  return (
    <li key={item.id} className=" w-full">
      <ActiveLink
        to={item.href}
        className=" w-full h-full flex items-center gap-1"
      >
        <div
          className={cn(
            " size-[26px] aspect-square flex items-center justify-center"
          )}
        >
          <img
            src={isActive ? item.activeIcon : item.icon}
            alt={`${item.name} icon`}
            className=" object-contain transition-all"
          />
        </div>
        <p
          className={cn(
            " line-clamp-1 whitespace-nowrap text-sm text-white/50 font-semibold transition-all",
            !isOpenSidebar && "opacity-0",
            isActive && "text-primary-blue font-black"
          )}
        >
          {item.name}
        </p>
      </ActiveLink>
    </li>
  );
};
