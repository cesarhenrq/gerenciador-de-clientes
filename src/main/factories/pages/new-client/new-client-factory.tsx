import { NewClient } from "@presentation/components/pages";

import { ISearch } from "@presentation/interfaces";

const MakeNewClient = () => {
  const handleSubmit = (data: ISearch) => {
    console.log(data);
  };
  return <NewClient handleSubmit={handleSubmit} />;
};

export default MakeNewClient;
