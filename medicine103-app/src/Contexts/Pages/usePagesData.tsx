import * as React from 'react';
import { PagesContextType } from './pagesContext';

export interface SelectPagesDataType {
  pagesData: PagesContextType | Object;
}

export const SelectPagesDataContext = React.createContext<SelectPagesDataType | Object>({});

export const usePagesDataContext = () => React.useContext(SelectPagesDataContext);

export const usePagesDataActions = (): SelectPagesDataType => {
  const _pagesData = usePagesDataContext();
  return {
    pagesData: _pagesData
  };
};

export const PagesDataProvider: React.FC<{
  children: React.ReactNode; actions: SelectPagesDataType 
}> = (props) => {
  return (
    <SelectPagesDataContext.Provider value={props.actions}>
      {props.children}
    </SelectPagesDataContext.Provider>
  );
};
