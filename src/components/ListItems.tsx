import { ReactNode } from "react";

interface Props<T> {
  items: T[];
  render: (item: T, index: number) => ReactNode;
}

export const ListItems = <T,>({ items, render }: Props<T>) => {
  return items.map((item, index) => render(item, index));
};
