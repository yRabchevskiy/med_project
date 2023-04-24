import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const Main = styled.main`
  width: calc(100% - 80px);
  margin-left: 80px;
  z-index: 1;
  padding: 12px 24px;
  overflow: auto;
`;