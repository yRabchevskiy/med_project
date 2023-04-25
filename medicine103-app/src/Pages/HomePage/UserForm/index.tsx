import React from 'react';
// import { Button } from './styles';

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  styles?: Object;
  children?: React.ReactNode;
}

const UserForm: React.FC<Props> = (props: Props) => {
  return (
    <div style={props.styles} onClick={props.onClick}>{props.children}</div>
  );
}

export default React.memo(UserForm);