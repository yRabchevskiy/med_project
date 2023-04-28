import React from 'react';
import { TabsWrapper } from './styles';
import { ITab } from './model';
import Tab from './Tab';

interface Props {
  tabs: ITab[];
  activeTab: ITab;
  onSelectTab: (tab: ITab) => void;
  styles?: Object;
  children?: React.ReactNode;
}

const Tabs: React.FC<Props> = (props: Props) => {
  return (
    <TabsWrapper style={props.styles}>
      {props.tabs.map(it => <Tab active={props.activeTab.id === it.id} key={it.id + 'tab'} onClick={t => props.onSelectTab(t)} tab={it} />)}
    </TabsWrapper>
  );
};

export default React.memo(Tabs);