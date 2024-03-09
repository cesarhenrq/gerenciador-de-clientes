import { useCallback, useMemo, useState } from "react";

import { Box, Button } from "@mui/material";

import MakeTextFields from "./utils/text-fields-factory";

import * as S from "./styles";

import IProps from "./props";

const SearchBar = ({ onSearch }: IProps) => {
  const [search, setSearch] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const factoryProps = useMemo(
    () => ({
      search,
      handleChange,
    }),
    [search, handleChange]
  );

  return (
    <Box component='form' noValidate autoComplete='off'>
      <S.Container>
        <MakeTextFields {...factoryProps} />
      </S.Container>
      <Button variant='contained' onClick={() => onSearch(search)}>
        Pesquisar
      </Button>
    </Box>
  );
};

export default SearchBar;
