import styled from "styled-components/macro";

export const StyledFolder = styled.section`
  font-weight: bold;
  font-size: 16px;
  margin-top:5px;
  margin-bottom:5px;
  padding-left: ${(p) => p.theme.indent}px;
  .tree__file {
    padding-left: ${(p) => p.theme.indent}px;
    font-size: 16px;
  }
`;
