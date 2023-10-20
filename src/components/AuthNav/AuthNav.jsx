import { StyledLink, Wrapper } from 'components/AppBar/AppBar.styled';

const AuthNav = () => {
  return (
    <Wrapper>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </Wrapper>
  );
};

export default AuthNav;
