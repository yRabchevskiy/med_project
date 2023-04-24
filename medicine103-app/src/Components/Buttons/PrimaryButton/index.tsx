import React from 'react';
import { Button } from './styles';

interface Props {
  label: string;
  onClick?: () => void;
  type: 'button' | 'submit';
  disabled?: boolean;
  styles?: Object;
}

const PrimaryButton: React.FC<Props> = (props: Props) => {
  return (
    <Button style={props.styles} type={props.type || 'button'} disabled={props.disabled} onClick={props.onClick}>{props.label}</Button>
  );
}

export default React.memo(PrimaryButton);