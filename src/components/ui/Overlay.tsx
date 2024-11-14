import cn from "@/lib/utils";
import { MouseEvent, ReactNode } from "react";

type Props = {
  onClose: () => void;
  className?: string;
  children: ReactNode;
};

export const Overlay = ({ className, children, onClose }: Props) => {
  const onCloseOverlay = (e: MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    if (element.id !== "overlay") return;
    onClose();
  };

  return (
    <section
      className={cn(
        "w-full h-dvh fixed z-50 p-5 left-0 top-0 backdrop-brightness-[0.4] grid place-items-center",
        className
      )}
      id="overlay"
      onClick={onCloseOverlay}
    >
      {children}
    </section>
  );
};
