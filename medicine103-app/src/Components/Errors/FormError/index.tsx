import React from 'react';
import { Error } from './styles';

interface Props {
  value: string;
  styles?: Object;
}

const FormError: React.FC<Props> = (props: Props) => {
  return (
    <Error style={props.styles}>{props.value}</Error>
  );
}

export default React.memo(FormError);