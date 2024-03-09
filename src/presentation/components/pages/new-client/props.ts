import { ISearch } from "@presentation/interfaces";

export default interface IProps {
  handleSubmit: (data: ISearch) => void;
}
