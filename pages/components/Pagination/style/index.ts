import styled from "styled-components";
import { Colors } from "../../../../styles/GlobalStyle";

export const StyledPagination = styled.ul`
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

export const StyledPaginationList = styled.li<{ isFocused: boolean }>`
  color: ${Colors.$4169e1};
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ isFocused }) =>
    isFocused ? Colors.$d3d3d3 : "transparent"};
  padding: 0 16px;
`;
