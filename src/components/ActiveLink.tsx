import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
};

export const ActiveLink = ({ className, to, children, ...props }: Props) => {
  const { pathname } = useLocation();

  const isActive = pathname === to;

  return (
    <Link
      to={to}
      className={cn(isActive && "text-primary-blue", className)}
      {...props}
    >
      {children}
    </Link>
  );
};
