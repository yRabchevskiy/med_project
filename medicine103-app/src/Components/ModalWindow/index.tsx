import React from 'react';
import { ModalBg, ModalCloseButton, ModalHeader, ModalWrapper, Wrapper } from './styles';
import ReactDOM from 'react-dom';
import { closeIcon } from '../../Images/icons';

interface Props {
  title?: string;
  onClose?: () => void;
  styles?: Object;
  children?: React.ReactNode;
}

const ModalWindow: React.FC<Props> = (props: Props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Wrapper>
          <ModalBg onClick={props.onClose} />
          <ModalWrapper style={props.styles}>
            <>
              <ModalCloseButton onClick={props.onClose}>{closeIcon}</ModalCloseButton>
              {props.title && <ModalHeader>{props.title}</ModalHeader>}
              {props.children}
            </>
            
          </ModalWrapper>
        </Wrapper>, document.body,
      )}
    </>
  );
}

export default React.memo(ModalWindow);