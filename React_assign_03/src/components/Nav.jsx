import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useUserStore from '../store/userStore';
import { IoHome } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoLogInOutline } from 'react-icons/io5';
import { IoLogOutOutline } from 'react-icons/io5';

const Nav = () => {
  const navigate = useNavigate();

  const { user, isAuthenticated, logout } = useUserStore();

  const logoutBtn = () => {
    logout();
    navigate('/');
  };

  return (
    <NavBar>
      <NavContent>
        <NavLeft>
          <LinkText to="/">
            <IoHome />
          </LinkText>
        </NavLeft>
        <NavRight>
          {isAuthenticated ? (
            <UserInfo>
              {user.name}님 안녕하세요.
              <LinkText to="/userInfo">
                <FaRegUserCircle />
              </LinkText>
              <LogoutBtn onClick={logoutBtn}>
                로그아웃 <IoLogOutOutline />
              </LogoutBtn>
            </UserInfo>
          ) : (
            <LoginBtn onClick={() => navigate(`/login`)}>
              로그인 <IoLogInOutline />
            </LoginBtn> // 로그인 버튼
          )}
        </NavRight>
      </NavContent>
    </NavBar>
  );
};

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
  align-items: center;
  padding-right: 20px;
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

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const LogoutBtn = styled.button`
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

export default Nav;
