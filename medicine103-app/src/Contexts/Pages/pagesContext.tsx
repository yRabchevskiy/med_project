import * as React from 'react';
import { ITab } from '../../Components/Tabs/model';
import { InventoryTabsArray } from '../../Pages/InventoryPage/models';

export interface PagesContextType {
  inventoryActiveTab: ITab;
  onSetActiveTab: (tab: ITab) => void;
}

export function usePagesDataContext(): PagesContextType {
  const [inventoryActiveTab, setInventoryActiveData] = React.useState<ITab>(InventoryTabsArray[0]);

  const onSetActiveTab = (tab: ITab) => {
    if (tab.id === inventoryActiveTab.id) return;
    setInventoryActiveData(tab);
  };

  return {
    inventoryActiveTab,
    onSetActiveTab
  };
}
