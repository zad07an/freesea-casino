import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className=" w-full pt-24 pb-32 flex flex-col items-center gap-10 text-center text-[#FFF8F8] text-sm font-black">
      <Logo />
      <div className=" w-fit flex flex-col gap-1">
        <p>&copy; 2024LOGO | All rights reserved.</p>
        <span>1BTC - $NaN</span>
      </div>
      <p className=" text-center max-w-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been th Lorem Ipsum is simply dummy text of
        the printing and typesetting industry.{" "}
      </p>
    </footer>
  );
};
