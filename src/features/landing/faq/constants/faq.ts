import { v4 } from "uuid";

export const FAQ_ITEMS = [
  {
    id: v4(),
    title: "Deposite",
    questions: [
      "Is it safe to deposit your cryptocurrencies into Nesob?",
      "Which cryptocurrencies does Nesob support?",
      "I don’t see my deposit in my account. Why?",
    ],
  },
  {
    id: v4(),
    title: "Withdraw",
    questions: [
      "How long does the withdrawal process take?",
      "Is the withdrawal fee included in my withdrawal requests?",
      "Does Nesob support withdrawal of funds to Smart Contract ETH wallet addresses?",
      "Does Nesob support withdrawals to SegWit BTC wallet addresses?",
    ],
  },
];
