import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Wrapper } from './style';
// import Header from '../Components/Header';
import UserNavPanel from '../Components/UserNavPanel';
import { PagesDataProvider, usePagesDataActions } from '../Contexts/Pages/usePagesData';

function MainLayout() {
  const pagesDataActions = usePagesDataActions();
  return (
    <Wrapper>
      <UserNavPanel />
      <PagesDataProvider actions={pagesDataActions}>
        <Main><Outlet /></Main>
      </PagesDataProvider>
    </Wrapper>

  );
}


export default MainLayout;