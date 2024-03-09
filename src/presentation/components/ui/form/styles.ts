import styled from "styled-components";

import { Box } from "@mui/material";

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  margin-bottom: 24px;

  button {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 30%;
    margin: 0 auto 24px;
  }
`;
