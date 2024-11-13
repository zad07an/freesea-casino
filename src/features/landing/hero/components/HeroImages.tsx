import bitcoint from "@/assets/resources/bitcoin.svg";
import cardano from "@/assets/resources/cardano.svg";
import curvedLines from "@/assets/resources/curved-lines.svg";
import etherium from "@/assets/resources/etherium.svg";
import galaxyTab from "@/assets/resources/Galaxy Tab S8 Ultra 1.svg";
import phone from "@/assets/resources/iphone-x-mockup 1.svg";
import macbook from "@/assets/resources/MacBook Pro 16-inch Space Black Front 1.svg";
import cn from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export const HeroImages = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      {/* devices */}
      <motion.img
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, type: "spring" }}
        className="absolute -z-10 md:-right-4 md:top-auto xs:top-12 xs:right-20 top-14 -right-16"
        src={galaxyTab}
        alt="galaxy tab"
        width={363}
        height={272}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, type: "spring" }}
        className="absolute md:-right-10 xs:right-16 -right-10 md:bottom-20 xs:bottom-0 -bottom-32"
        src={phone}
        alt="phone"
        width={159}
        height={230}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        className="absolute -z-20 top-20 md:left-auto left-0"
        src={macbook}
        alt="phone"
        width={314}
        height={192}
      />

      {/* coins */}
      <motion.img
        initial={{ opacity: 0, scale: 0.5, rotate: 180, y: 50 }}
        animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="absolute md:left-28 left-10 md:top-24 top-6 z-10"
        src={cardano}
        alt="phone"
        width={49}
        height={48}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5, rotate: 180, y: 50 }}
        animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute z-10 -top-6 right-0"
        src={etherium}
        alt="phone"
        width={58}
        height={57}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5, rotate: 180, y: 50 }}
        animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="absolute -z-10 md:bottom-6 xs:-bottom-20 -bottom-36"
        src={bitcoint}
        alt="phone"
        width={70}
        height={69}
      />

      {/* curved lines */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 3, type: "spring" }}
        className="absolute -z-30 rotate-2 md:left-24 md:bottom-8 sm:-bottom-16 xs:-bottom-24 -bottom-36 sm:left-6 left-0"
        src={curvedLines}
        alt="phone"
        width={628}
        height={350}
      />
    </div>
  );
};
