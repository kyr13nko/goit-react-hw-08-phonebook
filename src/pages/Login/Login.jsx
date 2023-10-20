import {
  Block,
  Button,
  Container,
  Form,
  Input,
  Label,
  Title,
} from 'index.styled';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   logIn({
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };
  return (
    <Container>
      <Block>
        <Title>Login:</Title>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>
            Email
            <Input type="email" name="email" />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
          </Label>
          <Button type="submit">Log In</Button>
        </Form>
      </Block>
    </Container>
  );
};

export default Login;
