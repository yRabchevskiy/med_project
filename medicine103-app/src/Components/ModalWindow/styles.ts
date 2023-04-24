import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.1);
`;

export const ModalWrapper = styled.div`
  height: 80%;
  width: 80%;
  border: 1px solid #5454d6;
  border-radius: 4px;
  background: white;
  padding: 16px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
  pointer-events: all;
`;