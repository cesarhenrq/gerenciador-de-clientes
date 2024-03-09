import { IClient } from "@presentation/interfaces";

export default interface IProps {
  data: Omit<IClient, "address">[];
}
