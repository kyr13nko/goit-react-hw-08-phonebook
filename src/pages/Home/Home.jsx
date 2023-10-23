import { StyledLink } from 'components/AppBar/AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { Block, Container } from 'index.styled';
import { ButtonWrapper, TextWrapper } from './Home.styled';

const Home = () => {
  const { isLoggedIn, user } = useAuth();

  return isLoggedIn ? (
    <Container>
      <Block>
        <TextWrapper>
          <h1>Hi, {user.name}!</h1>
          <p>Welcome to your phonebook.</p>
        </TextWrapper>
        <ButtonWrapper>
          <StyledLink to="/contacts">Contacts</StyledLink>
        </ButtonWrapper>
      </Block>
    </Container>
  ) : (
    <Container>
      <Block>
        <TextWrapper>
          <h1>Hello, friend!</h1>
          <h2>I'm your phonebook.</h2>
          <p>
            To get started, please <b>register</b> or <b>log in</b> to your
            account:
          </p>
        </TextWrapper>
        <ButtonWrapper>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Log In</StyledLink>
        </ButtonWrapper>
      </Block>
    </Container>
  );
};

export default Home;
