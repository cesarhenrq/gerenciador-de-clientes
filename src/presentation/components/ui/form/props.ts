import { ISearch } from "@presentation/interfaces";

export default interface IProps {
  onSubmit: (data: ISearch) => void;
}
