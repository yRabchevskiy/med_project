/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ActionRow from "../../Components/PageComponents/ActionRow";
import PageWrapper from "../../Components/PageComponents/PageWrapper";
import Tabs from "../../Components/Tabs";
import { InventoryTabsArray } from "./models";
import { ITab } from "../../Components/Tabs/model";
import { usePagesDataContext } from "../../Contexts/Pages/pagesContext";
import CarsTab from "./CarsTab";

interface Props { }
const InventoryPage: React.FC<Props> = (props: Props) => {
  const { inventoryActiveTab, onSetActiveTab } = usePagesDataContext();
  

  const onSelectTab = (t: ITab) => {
    onSetActiveTab(t);
  };

  return (
    <PageWrapper>
      <ActionRow>
        <Tabs tabs={InventoryTabsArray} activeTab={inventoryActiveTab} onSelectTab={onSelectTab} />
      </ActionRow>
     {inventoryActiveTab === InventoryTabsArray[0] && <CarsTab />}
     {inventoryActiveTab === InventoryTabsArray[1] && <>Tech</>}
     {inventoryActiveTab === InventoryTabsArray[2] && <>Other</>}
    </PageWrapper>
  );
};

export default React.memo(InventoryPage);
