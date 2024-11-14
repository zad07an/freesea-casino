import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { FaqQuestionsDataProps } from "../types/definitons";

interface Props {
  item: FaqQuestionsDataProps;
  isOpen: boolean;
  onToggle: () => void;
}

export const FaqQuestionAndAnswerItem = ({ item, isOpen, onToggle }: Props) => {
  return (
    <div className=" w-full flex items-start justify-between">
      <div className="grow font-semibold ">
        <p
          onClick={onToggle}
          className="text-[#E8D0D0] hover:underline hover:underline-offset-2 cursor-pointer"
        >
          {item.question}
        </p>
        {isOpen && (
          <div className={cn(" text-white/50 text-sm py-2 px-4")}>
            <p className=" ">
              {item.answer} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aliquid accusantium pariatur repudiandae amet expedita,
              corporis obcaecati cupiditate sunt at nemo veritatis ad animi
              perferendis? Quod.
            </p>
          </div>
        )}
      </div>
      <div>
        <ChevronDown
          size={16}
          className={cn("transition-all", isOpen && "rotate-180")}
        />
      </div>
    </div>
  );
};
