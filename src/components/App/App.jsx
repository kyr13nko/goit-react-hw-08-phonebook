import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from 'guards/PrivateRoute';
import { RestrictedRoute } from 'guards/RestrictedRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/" component={<Login />} />}
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
