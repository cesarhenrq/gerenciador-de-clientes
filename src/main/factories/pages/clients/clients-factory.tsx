import { Clients } from "@presentation/components/pages";

import { ISearch } from "@presentation/interfaces";

const MakeClients = () => {
  const handleSearch = (search: ISearch) => {
    console.log("searching...", search);
  };

  const props = {
    handleSearch,
  };

  return <Clients {...props} />;
};

export default MakeClients;
