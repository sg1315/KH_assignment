import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';
import styled from 'styled-components';

const UserInfo = () => {
  const { user, isAuthenticated, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  if (!isAuthenticated || !user) {
    return <p>로그인이 필요합니다.</p>;
  }

  return (
    <Container>
      <Info>
        <TopArea>
          <InfoTitle>사용자 정보</InfoTitle>
        </TopArea>
        <MiddleArea>
          <InfoArea>
            <InfoLabel>아이디 :</InfoLabel>
            <InfoText>{user.id}</InfoText>
          </InfoArea>
          <InfoArea>
            <InfoLabel>이름 :</InfoLabel>
            <InfoText>{user.name}</InfoText>
          </InfoArea>
          <InfoArea>
            <InfoLabel>이메일 :</InfoLabel>
            <InfoText>{user.email}</InfoText>
          </InfoArea>
        </MiddleArea>
        <ButtonArea>
          <SubmitButton onClick={handleLogout}>로그아웃</SubmitButton>
        </ButtonArea>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
  width: 80%;
  min-width: 600px;
  height: 40vh;
  background: #f9f9f9;
  color: #222;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  width: 80%;
  height: 80%;
`;

const TopArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
  align-items: center;
`;

const InfoTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const MiddleArea = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoArea = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
`;

const InfoLabel = styled.label`
  width: 20%;
  font-size: 16px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  color: #333;
`;

const InfoText = styled.p`
  width: 80%;
  height: 50px;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const ButtonArea = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: right;
  gap: 10px;
`;

const SubmitButton = styled.button`
  width: 30%;
  padding: 6px 10px;
  background-color: #c2c2ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b8b8fe;
  }
`;

export default UserInfo;
