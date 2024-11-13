import image from "@/assets/resources/image 65.svg";

export const InfluencerProgram = () => {
  return (
    <section className=" w-full flex lg:flex-row flex-col pt-6">
      <div className=" w-fit lg:basis-1/2 flex flex-col gap-8">
        <h3 className=" flex leading-tight flex-col uppercase bg-blue-gradient bg-clip-text text-transparent 2xl:text-[50px] lg:text-[44px] md:text-[38px] text-[32px] whitespace-nowrap font-black">
          <p>Nesob</p>
          <p>Influencer</p>
          <p>Program</p>
        </h3>
        <p className=" font-semibold">
          Once you become a prominent figure with a large social media
          following, you can secure a stable passive income by joining the
          decentralized Nesob Influencer program.
        </p>
      </div>
      <div>
        <img src={image} alt="image 65" width={584} height={621} />
      </div>
    </section>
  );
};
