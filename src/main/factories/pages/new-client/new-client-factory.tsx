import { useState } from "react";

import { NewClient } from "@presentation/components/pages";

import { ISearch } from "@presentation/interfaces";

import { makeRemoteClients } from "@main/usecases/clients";

const MakeNewClient = () => {
  const [error, setError] = useState<string>("");

  const handleSubmit = async (data: ISearch) => {
    try {
      const remoteClients = makeRemoteClients();
      await remoteClients.post(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  return <NewClient handleSubmit={handleSubmit} error={error} />;
};

export default MakeNewClient;
