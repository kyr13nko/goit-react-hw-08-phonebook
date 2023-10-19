import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <MainContainer>
        <Suspense>
          <Outlet />
        </Suspense>
      </MainContainer>
    </>
  );
};

export default Layout;
