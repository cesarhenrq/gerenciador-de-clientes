import { useState } from "react";

import { Box, Button, TextField } from "@mui/material";

import * as S from "./styles";

import IProps from "./props";

const Form = ({ onSubmit }: IProps) => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    pos_x: "",
    pos_y: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(fields);
  };

  return (
    <Box
      component='form'
      noValidate
      autoComplete='off'
      style={{
        width: "100%",
        marginBottom: "36px",
      }}
      onSubmit={handleSubmit}
    >
      <S.Container>
        <TextField
          id='outlined-search-name'
          label='Nome'
          type='search'
          style={{
            width: "100%",
          }}
          value={fields.name}
          name='name'
          onChange={handleChange}
          required
        />
        <TextField
          id='outlined-search-email'
          label='Email'
          type='search'
          style={{
            width: "100%",
          }}
          name='email'
          value={fields.email}
          onChange={handleChange}
          required
        />
        <TextField
          id='outlined-search-phone'
          label='Telefone'
          type='search'
          style={{
            width: "100%",
          }}
          name='phone'
          value={fields.phone}
          onChange={handleChange}
          required
        />
        <TextField
          id='outlined-search-pos_x'
          label='Coordenada X'
          type='search'
          style={{
            width: "100%",
          }}
          name='pos_x'
          value={fields.pos_x}
          onChange={handleChange}
          required
        />
        <TextField
          id='outlined-search-pos_y'
          label='Coordenada Y'
          type='search'
          style={{
            width: "100%",
          }}
          name='pos_y'
          value={fields.pos_y}
          onChange={handleChange}
          required
        />
        <Button variant='contained' color='success' type='submit'>
          Cadastrar
        </Button>
      </S.Container>
    </Box>
  );
};

export default Form;
