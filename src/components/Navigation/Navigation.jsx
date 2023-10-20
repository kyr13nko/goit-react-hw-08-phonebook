import { Nav, StyledLink } from 'components/AppBar/AppBar.styled';

const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </Nav>
  );
};

export default Navigation;
