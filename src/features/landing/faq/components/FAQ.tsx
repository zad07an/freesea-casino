import { ListItems } from "@/components/ListItems";
import { FAQ_ITEMS } from "../constants/faq";
import { FaqItem } from "./FaqItem";

export const FAQ = () => {
  return (
    <section className=" w-full flex flex-col items-center gap-6 pt-10 pb-16 px-5">
      <h3 className=" text-[24px] font-black uppercase">FAQ</h3>
      <div className=" w-full max-w-screen-lg flex flex-col gap-4">
        <ListItems
          items={FAQ_ITEMS}
          render={(item) => <FaqItem key={item.id} item={item} />}
        />
      </div>
    </section>
  );
};
