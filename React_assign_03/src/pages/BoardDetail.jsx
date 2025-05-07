import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBoardStore from '../store/boardStore';
import useUserStore from '../store/userStore';
import {
  Container,
  Content,
  TopArear,
  TitleArear,
  WriterArea,
  CenterArear,
  BottomArear,
  EditButton,
  DeleteButton,
} from '../components/styled/BoardDetail';

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
          <TitleArear>
            [{board.category}] {board.title}
          </TitleArear>
          <WriterArea>
            {board.userId} | {board.createDate}
          </WriterArea>
        </TopArear>
        <CenterArear>{board.content}</CenterArear>
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

export default BoardDetail;
