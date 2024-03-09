import { useState, useEffect } from "react";

import { Clients } from "@presentation/components/pages";

import { IClient, ISearch } from "@presentation/interfaces";

import { makeRemoteClients } from "@main/usecases/clients";

const MakeClients = () => {
  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    const remoteClients = makeRemoteClients();
    const load = async () => {
      try {
        const response = await remoteClients.load();
        setClients(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, []);

  const handleSearch = async (search: ISearch) => {
    try {
      const remoteClients = makeRemoteClients();

      const response = await remoteClients.load(search);

      setClients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const props = {
    handleSearch,
    data: clients,
  };

  return <Clients {...props} />;
};

export default MakeClients;
