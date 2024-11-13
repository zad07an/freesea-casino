import { ListItems } from "@/components/ListItems";
import { KEY_FEATURES } from "../constants/key-features";
import image from "@/assets/resources/image 65.svg";

export const KeyFeatures = () => {
  return (
    <section className=" w-full flex lg:flex-row flex-col">
      <div className=" w-fit lg:basis-1/2 flex flex-col gap-8">
        <h3 className=" flex leading-tight flex-col lg:items-end uppercase bg-blue-gradient bg-clip-text text-transparent 2xl:text-[50px] lg:text-[44px] md:text-[38px] text-[32px] whitespace-nowrap font-black">
          <p>KEY FEATURES OF</p>
          <p>DECENTRALIZED</p>
          <p>games</p>
        </h3>
        <ul className=" list-disc flex flex-col gap-6 pl-6">
          <ListItems
            items={KEY_FEATURES}
            render={(item) => <li key={item}>{item}</li>}
          />
        </ul>
      </div>
      <div>
        <img src={image} alt="image 65" width={584} height={621} />
      </div>
    </section>
  );
};
