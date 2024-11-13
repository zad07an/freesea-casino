import { Advantages } from "@/features/landing/advantages/components/Advantages";
import { Ecosystem } from "@/features/landing/ecosystem/components/Ecosystem";
import { Hero } from "@/features/landing/hero/components/Hero";
import { HowItWorks } from "@/features/landing/how-it-works/components/HowItWorks";
import { InfluencerProgram } from "@/features/landing/influencer-program/components/InfluencerProgram";
import { KeyFeatures } from "@/features/landing/key-features/components/KeyFeatures";
import { LandingSecondBlock } from "@/features/landing/landing-second-block/components/LandingSecondBlock";
import { Partners } from "@/features/landing/partners/components/Partners";
import { RecentGames } from "@/features/landing/recent-games/components/RecentGames";

export default function HomePage() {
  return (
    <section className=" w-full h-full flex flex-col gap-6 pt-10">
      <Hero />
      <Partners />
      <LandingSecondBlock />
      <HowItWorks />
      <div className=" flex flex-col gap-16 pt-24 pb-10 xl:pl-44 lg:pl-32 md:pl-20 sm:pl-8 px-5 md:pr-32">
        <KeyFeatures />
        <Advantages />
        <InfluencerProgram />
      </div>
      <Ecosystem />
      <RecentGames />
    </section>
  );
}
