import cn from "@/lib/utils";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: Props) => {
  return <input className={cn("", className)} {...props} />;
};
