import React, { memo } from "react";

import { TextField } from "@mui/material";

import { ISearch } from "@presentation/interfaces";

interface IProps {
  search: ISearch;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MakeTextFields = memo(({ search, handleChange }: IProps) => {
  const inputs = [
    {
      label: "Nome",
      name: "name",
    },
    {
      label: "Email",
      name: "email",
    },
    {
      label: "Telefone",
      name: "phone",
    },
  ];

  return inputs.map((input) => (
    <TextField
      key={input.name}
      id='outlined-search'
      label={input.label}
      type='search'
      name={input.name}
      value={search[input.name as keyof typeof search]}
      onChange={handleChange}
      style={{
        maxWidth: "calc(33.3333% - 16px)",
      }}
    />
  ));
});

export default MakeTextFields;
