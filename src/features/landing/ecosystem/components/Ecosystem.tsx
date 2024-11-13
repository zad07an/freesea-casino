import { ListItems } from "@/components/ListItems";
import { ECOSYSTEM } from "../constants/ecosystem";

export const Ecosystem = () => {
  return (
    <section className=" w-full h-fit pb-16 flex items-center justify-center px-5">
      <div className=" w-full flex flex-col items-center gap-16 max-w-screen-lg rounded-[155px] border-[1.5px] border-[#8045E7] bg-[#161F2C] p-16">
        <h3 className=" font-black text-center text-[#8045E7] md:text-[32px] text-[28px] uppercase">
          Nesob Ecosystem
        </h3>
        <div className=" w-full h-fit flex justify-center flex-wrap gap-16">
          <ListItems
            items={ECOSYSTEM}
            render={(item) => (
              <div
                key={item.text}
                style={{ borderColor: item.borderColor }}
                className=" w-52 h-fit flex flex-col items-center gap-8 border-2 rounded-2xl p-6"
              >
                <div className=" w-fit aspect-square">
                  <img
                    src={item.image}
                    alt={item.image}
                    className=" object-cover"
                  />
                </div>
                <p className=" text-[14px] font-semibold text-center">
                  {item.text}
                </p>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
};
