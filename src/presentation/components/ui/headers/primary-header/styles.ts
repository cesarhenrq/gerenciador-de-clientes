import styled from "styled-components";

import { Box } from "@mui/material";

import { theme } from "@presentation/styles/theme";

export const Header = styled(Box)`
  background-color: rgb(25, 118, 210);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  padding: 1.6rem;

  color: ${theme.colors.white};
`;
