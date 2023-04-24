import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  width: 100%;
  border: 1px solid #5454d6;
  border-radius: 4px;
  background: transparent;
  color: #5454d6;
  font-size: 18px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;