import cn from "@/lib/utils";
import {
  createContext,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
  useContext,
} from "react";

const SelectContext = createContext<boolean | undefined>(undefined);

const useSelectContext = (componentName: string) => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error(`${componentName} should be used within SelectContext`);
  }
  return context;
};

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({ className, children, ...props }: SelectProps) => {
  return (
    <SelectContext.Provider value={true}>
      <select className={cn(className)} {...props}>
        {children}
      </select>
    </SelectContext.Provider>
  );
};

type OptionProps = OptionHTMLAttributes<HTMLOptionElement>;

export const SelectOption = ({
  className,
  children,
  ...props
}: OptionProps) => {
  useSelectContext("SelectOption");

  return (
    <option className={cn(className)} {...props}>
      {children}
    </option>
  );
};
