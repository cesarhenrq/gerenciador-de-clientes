import { PrimaryHeader } from "@presentation/components/ui/headers";

import * as S from "./styles";

import IProps from "./props";

const BaseLayout = ({ children }: IProps) => {
  return (
    <S.Container>
      <PrimaryHeader />
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default BaseLayout;
