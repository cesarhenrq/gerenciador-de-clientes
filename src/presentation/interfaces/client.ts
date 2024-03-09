import IAddress from "./address";

export default interface IClient {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  address: IAddress;
}
