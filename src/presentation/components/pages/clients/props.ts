import { ISearch } from "@presentation/interfaces";

export default interface IProps {
  handleSearch: (search: ISearch) => void;
}
