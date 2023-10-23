import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  padding: 8px 16px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  color: #000000;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;

  &:hover {
    background-color: white;
    box-shadow: rgb(84, 76, 122) 1px -1px 0px 1px,
      rgb(57, 95, 58) -1px 1px 0px 1px;
  }

  &.active {
    color: white;
    box-shadow: rgb(84, 76, 122) 1px -1px 0px 1px,
      rgb(57, 95, 58) -1px 1px 0px 1px;
    background: linear-gradient(to top right, #395f3a 0%, #544c7a 100%);
  }
`;

export const User = styled.p`
  font-weight: 500;
`;

export const LogoutButton = styled.button`
  cursor: pointer;
  background-color: transparent;

  font-weight: 800;

  border: none;
  outline: none;

  background-color: white;
  box-shadow: rgb(84, 76, 122) 1px -1px 0px 1px,
    rgb(57, 95, 58) -1px 1px 0px 1px;
  padding: 4px 16px;

  &:hover {
    color: white;
    background: linear-gradient(to top right, #395f3a 0%, #544c7a 100%);
  }
`;
