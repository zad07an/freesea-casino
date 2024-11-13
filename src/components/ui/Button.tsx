import cn from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, children, ...props }: Props) => {
  return (
    <button
      className={cn(
        "px-4 py-1.5 rounded-md bg-primary-blue text-white disabled:cursor-not-allowed disabled:bg-primary-inactive hover:opacity-90 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
