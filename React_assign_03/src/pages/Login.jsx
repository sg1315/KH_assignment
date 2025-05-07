import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/userStore';
import {
  Container,
  Form,
  Title,
  Label,
  Input,
  ButtonGroup,
  SubmitButton,
  RegisterButton,
  Error,
} from '../components/styled/Login';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { login, isAuthenticated, error: storeError, loading } = useUserStore();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (!isAuthenticated && storeError) {
      setError(storeError || '아이디나 비밀번호가 잘못되었습니다.');
    }
  }, [storeError, isAuthenticated]);

  const loginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    await login(userId, password);
  };

  return (
    <Container>
      <Form onSubmit={loginSubmit}>
        <Title>로그인</Title>

        {loading && <p>로그인 중...</p>}
        {error && <Error>{error}</Error>}

        <Label htmlFor="userId">아이디</Label>
        <Input id="userId" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />

        <Label htmlFor="password">비밀번호</Label>
        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <ButtonGroup>
          <SubmitButton type="submit" disabled={loading}>
            로그인
          </SubmitButton>
          <RegisterButton type="button" onClick={() => navigate('/userEnroll')}>
            회원가입
          </RegisterButton>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

export default Login;
