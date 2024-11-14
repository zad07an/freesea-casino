import { v4 } from "uuid";
import dice from "@/assets/resources/Frame 51535.svg";
import blueOval from "@/assets/resources/blue-oval.svg";
import plinko from "@/assets/resources/Rectangle.svg";
import redOval from "@/assets/resources/red-oval.svg";
import mines from "@/assets/resources/Frame 51647.svg";
import greenOval from "@/assets/resources/green-oval.svg";
import limbo from "@/assets/resources/Frame 51654.svg";
import emeraldOval from "@/assets/resources/emerald-oval.svg";
import flip from "@/assets/resources/Frame 51652.svg";
import yellowOval from "@/assets/resources/yellow-oval.svg";

export const GAMES = [
  {
    id: v4(),
    name: "Dice",
    players: "502 player",
    icon: dice,
    oval: blueOval,
  },
  {
    id: v4(),
    name: "Plinko",
    players: "502 player",
    icon: plinko,
    oval: redOval,
  },
  {
    id: v4(),
    name: "Mines",
    players: "502 player",
    icon: mines,
    oval: greenOval,
  },
  {
    id: v4(),
    name: "Limbo",
    players: "502 player",
    icon: limbo,
    oval: emeraldOval,
  },
  {
    id: v4(),
    name: "Flip",
    players: "502 player",
    icon: flip,
    oval: yellowOval,
  },
];
