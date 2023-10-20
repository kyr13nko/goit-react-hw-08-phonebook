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

const Registration = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    form.reset();
  };
  return (
    <Container>
      <Block>
        <Title>Registration:</Title>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>
            Username
            <Input type="text" name="name" />
          </Label>
          <Label>
            Email
            <Input type="email" name="email" />
          </Label>
          <Label>
            Password
            <Input type="password" name="password" />
          </Label>
          <Button type="submit">Register</Button>
        </Form>
      </Block>
    </Container>
  );
};

export default Registration;
