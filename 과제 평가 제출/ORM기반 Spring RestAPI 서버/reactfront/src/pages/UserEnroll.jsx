import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import useUserStore from '../store/userStore';
import { useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  Container,
  Form,
  InputArea,
  Label,
  ValueInput,
  ButtonArea,
  CancelButton,
  SubmitButton,
  Error,
} from '../components/styled/UserEnroll';

const schema = Yup.object().shape({
  user_id: Yup.string().required('아이디를 입력하세요.'),
  user_pwd: Yup.string().required('비밀번호를 입력하세요.'),
  user_name: Yup.string().required('이름을 입력하세요.'),
  email: Yup.string().required('이메일을 입력하세요.'),
});

const UserEnrollForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
            <ValueInput {...register('user_id')} />
            {errors.user_id && <Error>{errors.user_id.message}</Error>}
          </InputArea>

          <InputArea>
            <Label>비밀번호</Label>
            <ValueInput type="password" {...register('user_pwd')} />
            {errors.user_pwd && <Error>{errors.user_pwd.message}</Error>}
          </InputArea>

          <InputArea>
            <Label>이름</Label>
            <ValueInput {...register('user_name')} />
            {errors.user_name && <Error>{errors.user_name.message}</Error>}
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

export default UserEnrollForm;
