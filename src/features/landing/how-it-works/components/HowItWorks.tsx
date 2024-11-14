import { ListItems } from "@/components/ListItems";
import { HOW_IT_WORKS_ITEMS } from "../constants/items";

export const HowItWorks = () => {
  return (
    <section className=" w-full h-fit pt-24 pb-16 flex flex-col items-center gap-8">
      <div className=" w-fit max-w-lg flex flex-col items-center text-center gap-4">
        <h3 className=" text-[40px] font-black uppercase">How it works</h3>
        <p className=" font-[700]">
          Nesob is an absolutely secure decentralized platform operating on Web3
          contracts
        </p>
      </div>
      <div className=" w-full h-fit flex items-center justify-center flex-wrap gap-10">
        <ListItems
          items={HOW_IT_WORKS_ITEMS}
          render={(item) => (
            <div
              key={item.text}
              className=" w-64 aspect-square flex flex-col items-center gap-2 text-center"
            >
              <div className=" size-48 aspect-square flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.image}
                  className=" object-cover"
                />
              </div>
              <p className=" font-semibold">{item.text}</p>
            </div>
          )}
        />
      </div>
    </section>
  );
};
