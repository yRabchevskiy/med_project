import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Wrapper } from './style';
// import Header from '../Components/Header';
import UserNavPanel from '../Components/UserNavPanel';

function MainLayout() {
  
  return (
    <Wrapper>
      <UserNavPanel />
      <Main><Outlet /></Main>
    </Wrapper>
  );
}


export default MainLayout;