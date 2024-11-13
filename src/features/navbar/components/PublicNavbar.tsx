import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";

export const PublicNavbar = () => {
  return (
    <nav className=" w-full pl-44 pr-60 flex items-center h-20 justify-between">
      <Logo />
      <Button className="w-[136px] h-[50px] bg-blue-gradient rounded-full font-black">
        Casino
      </Button>
    </nav>
  );
};
