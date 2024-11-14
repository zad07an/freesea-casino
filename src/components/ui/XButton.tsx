import cn from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import x from "@/assets/resources/x.svg";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const XButton = ({ className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "size-8 aspect-square flex items-center justify-center absolute top-2 right-2 z-10",
        className
      )}
      {...props}
    >
      <img src={x} alt="x icon" className="object-cover" />
    </button>
  );
};
