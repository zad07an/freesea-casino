import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/CustomButton";
import { useAuthStore } from "@/store/useAuthStore";

export const PublicNavbar = () => {
  const { onOpenLogin } = useAuthStore();

  return (
    <nav className=" w-full xl:pl-44 lg:pl-32 md:pl-20 sm:pl-8 px-5 xl:pr-60 lg:pr-48 md:pr-20 sm:pr-8 flex items-center h-20 justify-between">
      <Logo />
      <Button
        onClick={onOpenLogin}
        className="w-[136px] h-[50px] bg-blue-gradient rounded-full font-black"
      >
        Casino
      </Button>
    </nav>
  );
};
