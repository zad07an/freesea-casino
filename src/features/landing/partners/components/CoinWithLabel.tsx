import { cn } from "@/lib/utils";

interface Props {
  image: string;
  label: string;
  ringColor: string;
}

export const CoinWithLabel = ({ image, label, ringColor }: Props) => {
  return (
    <div className="md:w-fit w-36 h-fit flex items-center gap-3">
      <img
        src={image}
        alt="coin 4"
        className={cn(
          "ring-2 size-[30px] aspect-square ring-offset-2 rounded-full ring-offset-primary-background"
        )}
        style={{ boxShadow: `0 0 0 2px ${ringColor}` }}
      />
      <span className=" text-sm font-semibold line-clamp-1">{label}</span>
    </div>
  );
};
