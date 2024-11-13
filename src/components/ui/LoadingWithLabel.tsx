import cn from "@/lib/utils";
import { Loading } from "./Loading";

interface Props {
  orientation?: "horizontal" | "vertical";
  className?: string;
  size?: number;
}

export const LoadingWithLabel = ({
  className,
  size,
  orientation = "vertical",
}: Props) => {
  return (
    <div
      className={cn(
        "w-fit flex items-center gap-2",
        orientation === "vertical" ? "flex-col" : "flex-row-reverse"
      )}
    >
      <Loading size={size} />
      <span className={cn("font-bold text-white/60", className)}>Loading</span>
    </div>
  );
};
