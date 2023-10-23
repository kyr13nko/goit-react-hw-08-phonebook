import { Block, Button, Form, Input, Label, Title } from 'index.styled';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      ).unwrap();
      toast.success('Welcome!');
    } catch (error) {
      console.log('error', error);
      toast.error('Wrong email or password! Please try again!');
    }
    form.reset();
  };

  return (
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
  );
};

export default LoginForm;
