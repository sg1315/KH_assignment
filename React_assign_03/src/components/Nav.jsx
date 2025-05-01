import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  background: #696969;
  color: white;
  display: flex;
  text-align: center;
  justify-content: start;
`;

const NavContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: start;
`;

const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  margin: 12px;

  &:hover {
    background: #808080;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  &:active {
    background: #696969;
  }
`;

const NavRight = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: end;
`;

const LoginBtn = styled.button`
  width: 120px;
  height: 50%;
  padding: 12px;
  margin: 12px;
  background: #808080;
  color: white;

  &:hover {
    border-color: white;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <NavContent>
        <NavLeft>
          <LinkText to="/">메인</LinkText>
        </NavLeft>
        <NavRight>
          <LoginBtn>로그인</LoginBtn>
        </NavRight>
      </NavContent>
    </NavBar>
  );
};

export default Nav;
