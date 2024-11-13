import { LoadingWithLabel } from "./ui/LoadingWithLabel";

export const FullscreenLoading = () => {
  return (
    <div className=" w-full h-dvh grid place-items-center">
      <LoadingWithLabel size={64} className=" text-3xl" />
    </div>
  );
};
