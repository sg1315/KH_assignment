import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';
import {
  Container,
  Info,
  TopArea,
  InfoTitle,
  MiddleArea,
  InfoArea,
  InfoLabel,
  InfoText,
  ButtonArea,
  SubmitButton,
} from '../components/styled/UserInfo';

const UserInfo = () => {
  const { user, isAuthenticated, logout } = useUserStore();
  const navigate = useNavigate();

  const userLogout = () => {
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
            <InfoText>{user.user_id}</InfoText>
          </InfoArea>
          <InfoArea>
            <InfoLabel>이름 :</InfoLabel>
            <InfoText>{user.user_name}</InfoText>
          </InfoArea>
          <InfoArea>
            <InfoLabel>이메일 :</InfoLabel>
            <InfoText>{user.email}</InfoText>
          </InfoArea>
        </MiddleArea>
        <ButtonArea>
          <SubmitButton onClick={userLogout}>로그아웃</SubmitButton>
        </ButtonArea>
      </Info>
    </Container>
  );
};

export default UserInfo;
