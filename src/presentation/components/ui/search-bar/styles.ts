import styled from "styled-components";

import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  gap: 16px;

  width: 100%;

  margin-bottom: 16px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
