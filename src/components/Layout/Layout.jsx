import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/register">Registration</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
