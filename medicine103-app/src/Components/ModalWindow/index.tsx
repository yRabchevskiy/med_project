import React from 'react';
import { ModalWrapper, Wrapper } from './styles';
import ReactDOM from 'react-dom';

interface Props {
  onClose?: () => void;
  styles?: Object;
  children?: React.ReactNode;
}

const ModalWindow: React.FC<Props> = (props: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Wrapper style={props.styles} onClick={props.onClose}>
          <ModalWrapper>
            {props.children}
          </ModalWrapper>
        </Wrapper>, document.body,
      )}
    </>
  );
}

export default React.memo(ModalWindow);