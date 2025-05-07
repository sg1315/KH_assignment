import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import dayjs from 'dayjs';
import {
  SpinnerWrapper,
  Container,
  Form,
  TopArear,
  Select,
  TitleInput,
  TextArea,
  ButtonArea,
  CancelButton,
  SubmitButton,
  Error,
} from '../components/styled/BoardEnroll';

import useBoardStore from '../store/boardStore';
import useUserStore from '../store/userStore';

const schema = yup.object().shape({
  category: yup.string().required('카테고리를 선택해주세요.'),
  title: yup.string().required('제목을 입력해주세요.'),
  content: yup.string().required('내용을 입력해주세요.'),
});

const BoardEnroll = () => {
  const navigate = useNavigate();
  const { addBoard } = useBoardStore();
  const { user } = useUserStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const fullData = {
      ...data,
      createDate: dayjs().format('YY.MM.DD'),
    };
    await addBoard(fullData, user?.id);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  if (isSubmitting) {
    return (
      <SpinnerWrapper>
        <ClipLoader size={60} color="#0000cc" />
        <p>게시글을 등록 중입니다...</p>
      </SpinnerWrapper>
    );
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TopArear>
          <Select {...register('category')}>
            <option value="">카테고리 선택</option>
            <option value="영화">영화</option>
            <option value="음악">음악</option>
            <option value="책">책</option>
          </Select>
          {errors.category && <Error>{errors.category.message}</Error>}

          <TitleInput type="text" placeholder="제목을 입력하세요" {...register('title')} />
        </TopArear>
        {errors.title && <Error>{errors.title.message}</Error>}

        <TextArea placeholder="내용을 입력하세요" {...register('content')} />
        {errors.content && <Error>{errors.content.message}</Error>}

        <ButtonArea>
          <CancelButton type="button" onClick={() => navigate('/')}>
            취소하기
          </CancelButton>
          <SubmitButton type="submit">작성하기</SubmitButton>
        </ButtonArea>
      </Form>
    </Container>
  );
};

export default BoardEnroll;
