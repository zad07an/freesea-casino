import image from "@/assets/resources/pool 1.svg";
import { ListItems } from "@/components/ListItems";
import { ADVANTAGES } from "../constants/advantages";

export const Advantages = () => {
  return (
    <section className=" w-full flex lg:flex-row flex-col-reverse">
      <div>
        <img src={image} alt="image 65" width={584} height={621} />
      </div>
      <div className=" w-fit flex flex-col gap-14">
        <div className=" w-fit flex flex-col gap-8">
          <h3 className="leading-tight flex flex-col uppercase bg-blue-gradient bg-clip-text text-transparent 2xl:text-[50px] lg:text-[44px] md:text-[38px] text-[32px] font-black">
            <p>Advantages of</p>
            <p>the</p>
            <p>Liquidity Pool</p>
          </h3>
          <p>
            Participate as a liquidity pool provider and earn passive income
            every minute.
          </p>
        </div>
        <div className=" w-full grid xs:grid-cols-128 gap-10">
          <ListItems
            items={ADVANTAGES}
            render={(item) => (
              <div
                key={item.text}
                className=" w-full h-fit flex flex-col items-center gap-2"
              >
                <div className=" aspect-square flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.image}
                    className="object-cover"
                  />
                </div>
                <p className="text-[12px] font-semibold">{item.text}</p>
              </div>
            )}
          />
        </div>
        <p className=" font-semibold">
          You receive a percentage of ALL funds lost on the platform. This
          feature is built into the smart contract, and all transactions are
          automated.
        </p>
      </div>
    </section>
  );
};
