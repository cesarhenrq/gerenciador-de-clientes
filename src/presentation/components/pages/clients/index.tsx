import { SearchBar } from "@presentation/components/ui";

import * as S from "./styles";

import IProps from "./props";

const Clients = ({ handleSearch }: IProps) => {
  return (
    <S.Container>
      <SearchBar onSearch={handleSearch} />
    </S.Container>
  );
};

export default Clients;
