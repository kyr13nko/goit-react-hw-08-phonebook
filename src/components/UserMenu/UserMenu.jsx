import { LogoutButton, User, Wrapper } from 'components/AppBar/AppBar.styled';
import { ReactComponent as Userpic } from './userpic.svg';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Userpic width={24} height={24} />
      <User>Hello, {user.name}!</User>
      <LogoutButton type="button" onClick={handleLogOut}>
        Logout
      </LogoutButton>
    </Wrapper>
  );
};

export default UserMenu;
