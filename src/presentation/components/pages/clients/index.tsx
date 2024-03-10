import { Link } from "react-router-dom";

import { Box, Button } from "@mui/material";

import { SearchBar, Table, DeliveryModal } from "@presentation/components/ui";

import * as S from "./styles";

import IProps from "./props";

const Clients = ({
  handleSearch,
  data,
  handleModal,
  isModalOpen,
  delivery,
}: IProps) => {
  return (
    <S.Container>
      <DeliveryModal
        isOpen={isModalOpen}
        onClick={handleModal}
        data={delivery}
      />
      <SearchBar onSearch={handleSearch} />
      <Table data={data} />
      <Box sx={{ display: "flex" }}>
        <Button
          variant='contained'
          color='success'
          style={{
            marginRight: "24px",
          }}
          onClick={handleModal}
        >
          Ver rota de visitação
        </Button>
        <Link to='/new-client'>
          <Button variant='contained' color='primary'>
            Adicionar Cliente
          </Button>
        </Link>
      </Box>
    </S.Container>
  );
};

export default Clients;
