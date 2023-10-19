import { Link } from 'react-router-dom';
import { Header } from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/register">Registration</Link>
          <Link to="/login">Login</Link>
        </nav>
      </Header>
    </>
  );
};

export default AppBar;
