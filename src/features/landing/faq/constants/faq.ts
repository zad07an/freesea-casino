import { v4 } from "uuid";
import { FaqDataProps } from "../types/definitons";

export const FAQ_ITEMS: FaqDataProps[] = [
  {
    id: v4(),
    title: "Deposite",
    questions: [
      {
        id: v4(),
        question: "Is it safe to deposit your cryptocurrencies into Nesob?",
        answer: "Is it safe to deposit your cryptocurrencies into Nesob",
      },
      {
        id: v4(),
        question: "Which cryptocurrencies does Nesob support?",
        answer: "Which cryptocurrencies does Nesob support",
      },
      {
        id: v4(),
        question: "I don’t see my deposit in my account. Why?",
        answer: "I don’t see my deposit in my account.",
      },
    ],
  },
  {
    id: v4(),
    title: "Withdraw",
    questions: [
      {
        id: v4(),
        question: "How long does the withdrawal process take?",
        answer: "How long does the withdrawal process take",
      },
      {
        id: v4(),
        question: "Is the withdrawal fee included in my withdrawal requests?",
        answer: "Is the withdrawal fee included in my withdrawal requests",
      },
      {
        id: v4(),
        question:
          "Does Nesob support withdrawal of funds to Smart Contract ETH wallet addresses?",
        answer:
          "Does Nesob support withdrawal of funds to Smart Contract ETH wallet addresses",
      },
      {
        id: v4(),
        question:
          "Does Nesob support withdrawals to SegWit BTC wallet addresses?",
        answer: "Does Nesob support withdrawals to SegWit BTC wallet addresses",
      },
    ],
  },
];
