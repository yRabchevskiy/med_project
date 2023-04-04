import React from 'react';
import { Outlet } from 'react-router-dom';
import { Main, Wrapper } from './style';
import Header from '../Components/Header';

function MainLayout() {
  
  return (
    <Wrapper>
      <Header />
      <Main><Outlet /></Main>
    </Wrapper>
  );
}


export default MainLayout;