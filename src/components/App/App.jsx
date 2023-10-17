import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Container } from './App.styled';
import { getContacts } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <ContactForm />
        {contacts.length > 0 && <Filter />}
        <ContactsList />
      </Container>
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};

export default App;
