import React from 'react';
import { ITab } from '../model';
import { TabStyles } from '../styles';

interface Props {
  tab: ITab;
  onClick: (tab: ITab) => void;
  active: boolean;
  styles?: Object;
  children?: React.ReactNode;
}

const Tab: React.FC<Props> = (props: Props) => {
  const onClick = () => {
    if (props.active) return;
    props.onClick(props.tab);
  };
  return (
    <TabStyles isActive={props.active} style={props.styles} onClick={onClick}>
      {props.tab.label}
    </TabStyles>
  );
}

export default React.memo(Tab);