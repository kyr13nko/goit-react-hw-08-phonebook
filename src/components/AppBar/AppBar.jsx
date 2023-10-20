import Navigation from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  return (
    <>
      <Header>
        <Navigation />
        <UserMenu />
        <AuthNav />
      </Header>
    </>
  );
};

export default AppBar;
