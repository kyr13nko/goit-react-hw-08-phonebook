import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  width: 400px;

  color: #010101;
`;

export const Block = styled.div`
  box-shadow: 0px 20px 0px -18px rgba(84, 76, 122, 1),
    0px 18px 0px -16px rgba(57, 95, 58, 1);
  padding-bottom: 16px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;

  margin-bottom: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 100%;
  font-size: 12px;
`;

export const Input = styled.input`
  height: 20px;

  border: 1px solid white;
  outline: none;

  box-shadow: rgb(84, 76, 122) 1px -1px 0px 1px,
    rgb(57, 95, 58) -1px 1px 0px 1px;

  &:hover,
  &:focus {
    border: 1px solid black;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  background-color: transparent;

  font-weight: 800;

  border: none;
  outline: none;

  background-color: white;
  box-shadow: rgb(84, 76, 122) 1px -1px 0px 1px,
    rgb(57, 95, 58) -1px 1px 0px 1px;
  padding: 4px 16px;
  margin-top: 16px;

  &:hover {
    color: white;
    background: linear-gradient(to top right, #395f3a 0%, #544c7a 100%);
  }
`;
