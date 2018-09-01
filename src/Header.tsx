import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <NavBarItem exact={true} activeClassName="active" to="/">
        Home
      </NavBarItem>
      <NavBarItem activeClassName="active" to="/resume">
        Resume
      </NavBarItem>
      <NavBarItem activeClassName="active" to="/writings">
        Writings
      </NavBarItem>
      <NavBarItem activeClassName="active" to="/portfolio">
        Portfolio
      </NavBarItem>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  width: 100vw;
  background-color: #eeeeee;
  border-bottom: 5px solid #00adb5;
  padding: 20px;
  padding-right: 100px;
  @media all and (max-width: 479px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 0 20px 0;
  }
`;

const NavBarItem = styled(NavLink)`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  text-decoration: none;
  color: #393e46;
  padding: 0;
  margin: 0 30px 0 30px;
  font-weight: 400;
  &.active {
    font-weight: bold;
    color: #00adb5;
  }
  @media all and (max-width: 479px) {
    margin-bottom: 5px;
  }
`;
