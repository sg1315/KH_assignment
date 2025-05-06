import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBoardStore from '../store/boardStore';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const BoardEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBoardDetail, updateBoard } = useBoardStore();
  const [board, setBoard] = useState(null);
  
  // react-hook-form을 사용하여 폼 상태 관리
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const data = await getBoardDetail(id);
        setBoard(data);

        // 폼에 기존 값 설정
        setValue('category', data.category);
        setValue('title', data.title);
        setValue('content', data.content);
      } catch {
        alert('게시글을 불러오는 데 실패했습니다.');
        navigate('/');
      }
    };

    fetchBoard();
  }, [id, setValue, navigate]);

  const onSubmit = async (formData) => {
    try {
      await updateBoard(id, formData);
      alert('게시글이 수정되었습니다.');
      navigate(`/boards/${id}`);
    } catch (error) {
      console.error(error);
      alert('수정 중 오류가 발생했습니다.');
    }
  };

  if (!board) return <div>로딩 중...</div>;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TopArear>
          <Select {...register('category')}>
            <option value="영화">영화</option>
            <option value="음악">음악</option>
            <option value="책">책</option>
          </Select>
        
          <TitleInput
            type="text"
            {...register('title', { required: '제목을 입력하세요.' })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </TopArear>
        

          <TextArea
            {...register('content', { required: '내용을 입력하세요.' })}
          />
          {errors.content && <p>{errors.content.message}</p>}

        <ButtonArea>
          <SubmitButton type="submit">수정 완료</SubmitButton>
        </ButtonArea>
      </Form>
    </Container>
  );
};


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

export default BoardEdit;
