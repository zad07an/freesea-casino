import cn from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;

export const Overlay = ({ className, children, ...props }: Props) => {
  return (
    <section
      className={cn(
        "w-full h-dvh fixed z-50 left-0 top-0 backdrop-brightness-[0.2] grid place-items-center",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
