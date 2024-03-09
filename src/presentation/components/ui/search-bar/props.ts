import { ISearch } from "@presentation/interfaces";

export default interface IProps {
  onSearch: (search: ISearch) => void;
}
