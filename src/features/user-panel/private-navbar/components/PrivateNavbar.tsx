import arrowRight from "@/assets/resources/arrow-right.svg";

import { Logo } from "@/components/Logo";
import { Search } from "@/components/Search";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/useSidebarStore";
import { Balance } from "./Balance";
import { UserButton } from "./UserButton";
import { Link } from "react-router-dom";

export const PrivateNavbar = () => {
  const { isOpenSidebar, onToggleSidebar } = useSidebarStore();

  return (
    <header className=" w-full h-20 sticky top-0 z-40">
      <nav className="w-full h-full flex items-center justify-between lg:bg-primary-header bg-primary-navbar">
        <div className=" lg:min-w-56 w-fit h-full lg:bg-primary-navbar md:pl-8 pl-4 md:pr-3 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <button
            onClick={onToggleSidebar}
            className=" size-6 aspect-square rounded-full bg-primary-header hidden lg:flex items-center justify-center"
          >
            <img
              src={arrowRight}
              alt="arrow icon"
              className={cn(" object-contain transition-all duration-300", {
                "scale-x-[-1]": isOpenSidebar,
              })}
            />
          </button>
        </div>
        <div className=" md:w-full w-fit h-full lg:border-l-[3px] border-primary-blue pl-2 md:pr-6 pr-4 flex items-center justify-between md:gap-4 gap-2">
          {/* search input */}
          <div className=" w-full h-fit md:block hidden">
            <Search />
          </div>

          {/* balance */}
          <Balance />

          {/* user button */}
          <UserButton />
        </div>
      </nav>
    </header>
  );
};
