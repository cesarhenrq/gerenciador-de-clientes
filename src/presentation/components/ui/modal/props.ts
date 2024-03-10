import { IRoute } from "@presentation/interfaces";

export default interface IProps {
  isOpen: boolean;
  onClick: () => void;
  data: IRoute[];
}
