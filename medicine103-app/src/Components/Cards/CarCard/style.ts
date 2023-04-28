import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  height: 240px;
  width: 100%;
  min-width: 280px;
  max-width: 400px;
  margin: 0 20px 20px 0;
  flex-shrink: 0;
  border: 1px solid #000000;
  border-radius: 8px;
  @media(max-width: 1024px) {
    padding: 0 1em;
  }
`;
