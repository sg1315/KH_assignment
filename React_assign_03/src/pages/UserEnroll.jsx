import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import useUserStore from '../store/userStore';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const schema = Yup.object().shape({
  id: Yup.string().required('아이디를 입력하세요.'),
  password: Yup.string().required('비밀번호를 입력하세요.'),
  name: Yup.string().required('이름을 입력하세요.'),
  email: Yup.string().required('이메일을 입력하세요.'),
});

const UserEnrollForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const { registerUser, loading } = useUserStore();

  const onSubmit = async (data) => {
    await registerUser(data);
    navigate('/');
  };

  return (
    <Container>
      {loading ? (
        <ClipLoader size={50} color="#6c63ff" />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputArea>
            <Label>아이디</Label>
            <ValueInput {...register('id')} />
            {errors.id && <Error>{errors.id.message}</Error>}
          </InputArea>

          <InputArea>
            <Label>비밀번호</Label>
            <ValueInput type="password" {...register('password')} />
            {errors.password && <Error>{errors.password.message}</Error>}
          </InputArea>

          <InputArea>
            <Label>이름</Label>
            <ValueInput {...register('name')} />
            {errors.name && <Error>{errors.name.message}</Error>}
          </InputArea>

          <InputArea>
            <Label>이메일</Label>
            <ValueInput {...register('email')} />
            {errors.email && <Error>{errors.email.message}</Error>}
          </InputArea>

          <ButtonArea>
            <CancelButton type="button" onClick={() => navigate('/login')}>
              취소하기
            </CancelButton>
            <SubmitButton type="submit">회원가입</SubmitButton>
          </ButtonArea>
        </Form>
      )}
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

const Form = styled.form`
  width: 80%;
  height: 80%;
`;

const InputArea = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 20px;
`;

const Label = styled.label`
  width: 20%;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const ValueInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ButtonArea = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: right;
  gap: 10px;
`;

const CancelButton = styled.button`
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

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export default UserEnrollForm;
