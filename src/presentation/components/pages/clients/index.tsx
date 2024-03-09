import { Link } from "react-router-dom";

import { SearchBar, Table } from "@presentation/components/ui";

import * as S from "./styles";

import IProps from "./props";
import { Button } from "@mui/material";

const Clients = ({ handleSearch, data }: IProps) => {
  return (
    <S.Container>
      <SearchBar onSearch={handleSearch} />
      <Table data={data} />
      <Link to='/new-client'>
        <Button variant='contained' color='primary'>
          Adicionar Cliente
        </Button>
      </Link>
    </S.Container>
  );
};

export default Clients;
