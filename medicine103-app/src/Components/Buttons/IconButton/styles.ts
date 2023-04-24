import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  width: 40px;
  border: 1px solid #5454d6;
  border-radius: 4px;
  background: transparent;
  color: #5454d6;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
    margin: auto;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;