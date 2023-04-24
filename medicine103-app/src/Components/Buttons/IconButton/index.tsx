import React from 'react';
import { Button } from './styles';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  styles?: Object;
  children?: React.ReactNode;
}

const IconButton: React.FC<Props> = (props: Props) => {
  return (
    <Button style={props.styles} type="button" disabled={props.disabled} onClick={props.onClick}>{props.children}</Button>
  );
}

export default React.memo(IconButton);