import { LogoutButton, User, Wrapper } from 'components/AppBar/AppBar.styled';
import { ReactComponent as Userpic } from './userpic.svg';

const UserMenu = () => {
  return (
    <Wrapper>
      <Userpic width={24} height={24} />
      <User>Hello, userName!</User>
      <LogoutButton type="button">Logout</LogoutButton>
    </Wrapper>
  );
};

export default UserMenu;
