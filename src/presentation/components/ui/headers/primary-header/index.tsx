import { useLocation } from "react-router-dom";

import { Typography } from "@mui/material";

import * as S from "./styles";

const PrimaryHeader = () => {
  const location = useLocation();

  const locationMapper = {
    "/clients": "Clientes",
    "/new-client": "Novo cliente",
  };

  return (
    <S.Header>
      <Typography>
        {locationMapper[location.pathname as keyof typeof locationMapper]}
      </Typography>
    </S.Header>
  );
};

export default PrimaryHeader;
