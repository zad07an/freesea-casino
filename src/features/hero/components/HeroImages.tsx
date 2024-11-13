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
        className="absolute -z-10 -right-4"
        src={galaxyTab}
        alt="galaxy tab"
        width={363}
        height={272}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, type: "spring" }}
        className="absolute -right-10 bottom-20"
        src={phone}
        alt="phone"
        width={159}
        height={230}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
        className="absolute -z-20 top-20"
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
        className="absolute left-28 top-24 z-10"
        src={cardano}
        alt="phone"
        width={49}
        height={48}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5, rotate: 180, y: 50 }}
        animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
        transition={{ delay: 1, type: "spring" }}
        className="absolute -z-20 -top-6 right-0"
        src={etherium}
        alt="phone"
        width={58}
        height={57}
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5, rotate: 180, y: 50 }}
        animate={{ opacity: 1, rotate: 0, scale: 1, y: 0 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="absolute -z-20 bottom-6"
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
        className="absolute -z-30 rotate-2 left-24 bottom-8"
        src={curvedLines}
        alt="phone"
        width={628}
        height={350}
      />
    </div>
  );
};
