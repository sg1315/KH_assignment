import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import dayjs from 'dayjs';

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
    }, 2000);
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

          <TitleInput
            type="text"
            placeholder="제목을 입력하세요"
            {...register('title')}
          />
        </TopArear>
        {errors.title && <Error>{errors.title.message}</Error>}

        <TextArea
          placeholder="내용을 입력하세요"
          {...register('content')}
        />
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

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-size: 18px;
`;

const Container = styled.div`
  margin-top: 70px;
  width: 80%;
  min-width: 1200px;
  height: 80vh;
  background: #f5f5f5;
  color: #222;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 80%;
  height: 80%;
`;

const TopArear = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 18%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TitleInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 70%;
  resize: none;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  min-height: 150px;
`;

const ButtonArea = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: right;
  gap: 10px;
`;

const CancelButton = styled.button`
  width: 20%;
  padding: 12px 20px;
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
  width: 20%;
  padding: 12px 20px;
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

export default BoardEnroll;
