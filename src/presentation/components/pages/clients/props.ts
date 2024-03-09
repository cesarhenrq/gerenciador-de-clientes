import { ISearch, IClient } from "@presentation/interfaces";

export default interface IProps {
  handleSearch: (search: ISearch) => void;
  data: Omit<IClient, "address">[];
}
