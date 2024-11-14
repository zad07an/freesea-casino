import { v4 } from "uuid";
import dice from "@/assets/resources/dice.svg";
import bullseye from "@/assets/resources/bullseye.svg";
import bomb from "@/assets/resources/bomb.svg";
import flip from "@/assets/resources/flip.svg";
import rocket from "@/assets/resources/rocket.svg";

export const LIVE_WINNERS = [
  {
    id: v4(),
    username: "Hartnarn",
    game: "Dice",
    icon: dice,
    price: "$4,867.89",
  },
  {
    id: v4(),
    username: "Hartnarn",
    game: "Mines",
    icon: bomb,
    price: "$4,867.89",
  },
  {
    id: v4(),
    username: "Hartnarn",
    game: "Plinko",
    icon: bullseye,
    price: "$4,867.89",
  },
  {
    id: v4(),
    username: "Hartnarn",
    game: "Limbo",
    icon: rocket,
    price: "$4,867.89",
  },
  {
    id: v4(),
    username: "Hartnarn",
    game: "Flip",
    icon: flip,
    price: "$4,867.89",
  },
];
