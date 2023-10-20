import { LogoutButton, Wrapper } from 'components/AppBar/AppBar.styled';

const UserMenu = () => {
  return (
    <Wrapper>
      <p>Hello, userName!</p>
      <LogoutButton type="button">Logout</LogoutButton>
    </Wrapper>
  );
};

export default UserMenu;
