import plus from "@/assets/resources/plus.svg";

export const Balance = () => {
  return (
    <div className=" w-fit px-4 h-[36px] rounded-xl flex items-center justify-center py-2.5 gap-2 bg-primary-icon-background">
      <span className=" text-primary-yellow">$</span>
      <div className=" w-[1.5px] h-full bg-primary-yellow rounded-full"></div>
      <p className=" text-sm font-semibold">1.930.46</p>
      <button className=" size-5 aspect-square rounded-full bg-primary-yellow flex items-center justify-center">
        <img src={plus} alt="plus icon" className=" object-contain" />
      </button>
    </div>
  );
};
