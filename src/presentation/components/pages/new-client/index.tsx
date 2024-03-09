import { Link } from "react-router-dom";

import { Typography, Button } from "@mui/material";

import { Form } from "@presentation/components/ui";

import * as S from "./styles";

import IProps from "./props";

const NewClient = ({ handleSubmit, error }: IProps) => {
  return (
    <S.Container>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignSelf: "flex-start",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Link to='/clients'>
          <Button variant='contained' color='warning'>
            Voltar
          </Button>
        </Link>
        <Typography variant='h5'>Cadastrar novo cliente</Typography>
      </div>
      <Form onSubmit={handleSubmit} />
      {error && <Typography color='error'>{error}</Typography>}
    </S.Container>
  );
};

export default NewClient;
