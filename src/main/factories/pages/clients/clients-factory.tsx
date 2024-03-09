import { Clients } from "@presentation/components/pages";

import { ISearch } from "@presentation/interfaces";

function createData(name: string, email: string, phone: string) {
  return { name, email, phone };
}

const rows = [
  createData("Frozen yoghurt", "frozen@email.com", "123456789"),
  createData("Ice cream sandwich", "ice@email@com", "987654321"),
  createData("Eclair", "eclar@email.com", "123456789"),
];

const MakeClients = () => {
  const handleSearch = (search: ISearch) => {
    console.log("searching...", search);
  };

  const props = {
    handleSearch,
    data: rows as any,
  };

  return <Clients {...props} />;
};

export default MakeClients;
