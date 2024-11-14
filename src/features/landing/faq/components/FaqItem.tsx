import { ListItems } from "@/components/ListItems";
import { FaqDataProps } from "../types/definitons";
import { FaqQuestionAndAnswerItem } from "./FaqQuestionAndAnswerItem";
import { useState } from "react";

interface Props {
  item: FaqDataProps;
}

export const FaqItem = ({ item }: Props) => {
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenQuestionId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className=" w-full flex flex-col gap-3 rounded-lg pt-2 p-4 border-[0.5px] border-dotted border-[#E5E7EB] bg-[#161F2C]">
      <p className=" font-black text-primary-blue">{item.title}</p>
      <div className=" w-full flex flex-col gap-6">
        <ListItems
          items={item.questions}
          render={(qItem) => (
            <FaqQuestionAndAnswerItem
              key={qItem.id}
              item={qItem}
              isOpen={openQuestionId === qItem.id}
              onToggle={() => handleToggle(qItem.id)}
            />
          )}
        />
      </div>
    </div>
  );
};
