import { ISearch, IClient, IRoute } from "@presentation/interfaces";

export default interface IProps {
  handleSearch: (search: ISearch) => void;
  data: Omit<IClient, "address">[];
  handleModal: () => void;
  isModalOpen: boolean;
  delivery: IRoute[];
}
