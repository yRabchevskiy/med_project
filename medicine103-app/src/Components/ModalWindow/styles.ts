import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  
`;

export const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: all;
  background: rgba(0, 0, 0, 0.1);
`;

export const ModalWrapper = styled.div`
  height: 80%;
  width: 80%;
  border: 1px solid #5454d6;
  border-radius: 4px;
  background: white;
  padding: 24px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
`;

export const ModalCloseButton = styled.span`
  display: inline-flex;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ModalHeader = styled.div`
  height: 24px;
  line-height: 24px;
  margin-bottom: 12px;
  flex-shrink: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 24px;
  font-weight: 600;
`;