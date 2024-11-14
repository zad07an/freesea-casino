import { v4 } from "uuid";
import headphone from "@/assets/resources/headphone.svg";
import gameConsole from "@/assets/resources/solar_gamepad-outline.svg";
import promocode from "@/assets/resources/System_tag_type1.svg";
import warning from "@/assets/resources/warning.svg";
import dice from "@/assets/resources/dice-icon.svg";
import blueDice from "@/assets/resources/blue-dice.svg";
import bomb from "@/assets/resources/bomb.svg";
import blueMine from "@/assets/resources/blue-mine.svg";
import bullseye from "@/assets/resources/bullseye.svg";
import bluePlinko from "@/assets/resources/blue-plinko.svg";
import flip from "@/assets/resources/flip.svg";
import blueFlip from "@/assets/resources/blue-flip.svg";
import rocket from "@/assets/resources/rocket.svg";
import blueLimbo from "@/assets/resources/blue-limbo.svg";
import { SidebarDataProps } from "../types/definitions";

export const SIDEBAR_ITEMS: SidebarDataProps[] = [
  {
    id: v4(),
    name: "Games",
    icon: gameConsole,
    subItems: [
      {
        id: v4(),
        name: "Dice",
        icon: dice,
        href: "/dice",
        activeIcon: blueDice,
      },
      {
        id: v4(),
        name: "Mines",
        icon: bomb,
        href: "/mines",
        activeIcon: blueMine,
      },
      {
        id: v4(),
        name: "Plinko",
        icon: bullseye,
        href: "/plinko",
        activeIcon: bluePlinko,
      },
      {
        id: v4(),
        name: "Limbo",
        icon: rocket,
        href: "/limbo",
        activeIcon: blueLimbo,
      },
      {
        id: v4(),
        name: "Flip",
        icon: flip,
        href: "/flip",
        activeIcon: blueFlip,
      },
    ],
  },
  {
    id: v4(),
    name: "Promocode",
    icon: promocode,
    subItems: [],
  },
  {
    id: v4(),
    name: "Live support",
    icon: headphone,
    subItems: [],
  },
  {
    id: v4(),
    name: "Other infomation",
    icon: warning,
    subItems: [
      {
        id: v4(),
        name: "Bomb",
        icon: bomb,
        href: "",
        activeIcon: blueFlip,
      },
      {
        id: v4(),
        name: "Bullseye",
        icon: bullseye,
        href: "",
        activeIcon: blueFlip,
      },
      {
        id: v4(),
        name: "Flip",
        icon: flip,
        href: "",
        activeIcon: blueFlip,
      },
      {
        id: v4(),
        name: "Rocket",
        icon: rocket,
        href: "",
        activeIcon: blueFlip,
      },
    ],
  },
];
