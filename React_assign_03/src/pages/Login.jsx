import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useUserStore from '../store/userStore';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    await login(userId, password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>로그인</Title>

        {loading && <p>로그인 중...</p>}
        {error && <Error>{error}</Error>}

        <Label htmlFor="userId">아이디</Label>
        <Input
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <ButtonGroup>
          <SubmitButton type="submit" disabled={loading}>로그인</SubmitButton>
          <RegisterButton type="button" onClick={() => navigate('/userEnroll')}>회원가입</RegisterButton>
        </ButtonGroup>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 80%;
  min-width: 600px;
  margin: 80px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  margin: 10px 0 5px;
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

const SubmitButton = styled.button`
  margin: 0px 10px;
  padding: 12px 20px;
  background-color: #c2c2ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b8b8fe;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const RegisterButton = styled.button`
  margin: 0px 10px;
  padding: 12px 20px;
  background-color: #8dff91;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #62fb69;
  }
`;

const Error = styled.div`
  color: red;
  margin-bottom: 20px;
  text-align: center;
`;

export default Login;
