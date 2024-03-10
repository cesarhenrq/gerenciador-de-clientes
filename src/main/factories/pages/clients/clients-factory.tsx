import { useState, useEffect } from "react";

import { Clients } from "@presentation/components/pages";

import { IClient, ISearch, IRoute } from "@presentation/interfaces";

import { makeRemoteClients } from "@main/usecases/clients";
import { makeRemoteDelivery } from "@main/usecases/delivery";

const MakeClients = () => {
  const [clients, setClients] = useState<IClient[]>([]);

  const [delivery, setDelivery] = useState<IRoute[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    const remoteDelivery = makeRemoteDelivery();
    const load = async () => {
      try {
        const response = await remoteDelivery.load();
        setDelivery(response.data);
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

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const props = {
    handleSearch,
    data: clients,
    handleModal,
    isModalOpen,
    delivery,
  };

  return <Clients {...props} />;
};

export default MakeClients;
