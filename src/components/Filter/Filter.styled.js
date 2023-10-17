import { styled } from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

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
