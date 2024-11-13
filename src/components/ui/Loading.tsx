import loading from "@/assets/resources/loading10.svg";
import cn from "@/lib/utils";

interface Props {
  size?: number;
}

export const Loading = ({ size = 32 }: Props) => {
  return (
    <div className={cn(`size-[${size}] aspect-square`)}>
      <img
        src={loading}
        alt="loading"
        width={size}
        height={size}
        className=" animate-spin"
      />
    </div>
  );
};
