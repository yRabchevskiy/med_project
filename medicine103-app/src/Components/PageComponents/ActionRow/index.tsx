import React from 'react';
import { ActionRowWrapper } from './style';

interface Props {
  styles?: Object;
  children?: React.ReactNode;
}

const ActionRow: React.FC<Props> = (props: Props) => {
  return (
    <ActionRowWrapper style={props.styles}>
      {props.children}
    </ActionRowWrapper>
  );
}

export default React.memo(ActionRow);