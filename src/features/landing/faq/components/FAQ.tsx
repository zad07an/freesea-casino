import { ListItems } from "@/components/ListItems";
import { FAQ_ITEMS } from "../constants/faq";

export const FAQ = () => {
  return (
    <section className=" w-full flex flex-col items-center gap-6 pt-10 pb-16 px-5">
      <h3 className=" text-[24px] font-black uppercase">FAQ</h3>
      <div className=" w-full max-w-screen-lg flex flex-col gap-4">
        <ListItems
          items={FAQ_ITEMS}
          render={(item) => (
            <div
              key={item.id}
              className=" w-full flex flex-col gap-3 rounded-lg pt-2 p-4 border-[0.5px] border-dotted border-[#E5E7EB] bg-[#161F2C]"
            >
              <p className=" font-black text-primary-blue">{item.title}</p>
              <div className=" w-full flex flex-col gap-6">
                <ListItems
                  items={item.questions}
                  render={(qItem, index) => (
                    <p key={index} className=" font-semibold text-[#E8D0D0]">
                      {qItem}
                    </p>
                  )}
                />
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
};
