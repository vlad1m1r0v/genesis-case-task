import { ItemProps } from "./item.props.interface";

export interface RepositoryInterface {
  save: (item: ItemProps) => Promise<void>;

  find: (predicate: (item: ItemProps) => boolean) => Promise<ItemProps | null>;

  selectAll: () => Promise<ItemProps[]>;
}
