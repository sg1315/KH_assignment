import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBoardStore from '../store/boardStore';
import useUserStore from '../store/userStore';
import styled from 'styled-components';

const BoardDetail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const { getBoardDetail, deleteBoard } = useBoardStore();
  const { user, isAuthenticated } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const boardData = await getBoardDetail(id);
        setBoard(boardData);
      } catch (error) {
        console.error('게시글 정보를 가져오는 데 실패했습니다.', error);
      }
    };

    fetchBoard();
  }, [id, getBoardDetail]);

  if (!board) return <div>Loading...</div>;

  const canEditOrDelete = isAuthenticated && user.id === board.userId;

  const boardEdit = () => {
    navigate(`/boards/edit/${board.id}`);
  };

  const boardDelete = async () => {
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (!confirmDelete) return;
  
    try {
      await deleteBoard(board.id);
      alert('게시글이 삭제되었습니다.');
      navigate('/');

    } catch (error) {
      alert('삭제 중 오류가 발생했습니다.', error);
    }
  };

  return (
    <Container>
      <Content>
        <TopArear>
          <TitleArear>[{board.category}]  {board.title}</TitleArear>
          <WriterArea>{board.userId} | {board.createDate}</WriterArea>
        </TopArear>
        <CenterArear>
          {board.content}
        </CenterArear>
        <BottomArear>
          {canEditOrDelete && (
            <div>
              <EditButton onClick={boardEdit}>수정</EditButton>
              <DeleteButton onClick={boardDelete}>삭제</DeleteButton>
            </div>
          )}
        </BottomArear>

      </Content>
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

const Content = styled.div`
  width: 90%;
  height: 80%;
`;

const TopArear = styled.div`
  width: 100%;
  height: 20%;
  padding-bottom: 20px;
  border-bottom: 1px solid #aaa;
`;

const TitleArear = styled.div`
  width: 100%;
  height: 50%;
  font-size: 24px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const WriterArea = styled.div`
  width: 100%;
  height: 50%;
  font-size: 14px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const CenterArear = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: left;
  align-items: start;
  padding: 20px 0;
  font-size: 20px;
`;

const BottomArear = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const EditButton = styled.button`
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

const DeleteButton = styled.button`
  margin: 0px 10px;
  padding: 12px 20px;
  background-color: #ff8d8d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #fb6262;
  }
`;



export default BoardDetail;
