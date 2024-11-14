import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {
  return (
    <input
      className={cn(
        "bg-primary-header h-10 px-3 rounded-md text-sm",
        className
      )}
      {...props}
    />
  );
};
