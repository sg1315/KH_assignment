import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBoardStore from '../store/boardStore';
import useUserStore from '../store/userStore';
import useReplyStore from '../store/replyStore';
import ReplyAdd from '../components/RepleyAdd';
import {
  Container,
  Content,
  TopArear,
  TitleArea,
  WriterArea,
  WriterLeft,
  WriterRight,
  CenterArea,
  EditButton,
  DeleteButton,
  ReplyArea,
  ReplyList,
  ReplyContent,
  ReplyUser,
  ReplyComent,
} from '../components/styled/BoardDetail';

const BoardDetail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const { getBoardDetail, deleteBoard } = useBoardStore();
  const { user, isAuthenticated } = useUserStore();
  const { replys, getReplysByBoardId } = useReplyStore();
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

  useEffect(() => {
    getReplysByBoardId(id);
  }, [id]);

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
          <TitleArea>
            [{board.category}] {board.title}
          </TitleArea>
          <WriterArea>
            <WriterLeft>
              {board.userId} | {board.createDate}
            </WriterLeft>
            <WriterRight>
              {canEditOrDelete && (
                <div>
                  <EditButton onClick={boardEdit}>수정</EditButton>
                  <DeleteButton onClick={boardDelete}>삭제</DeleteButton>
                </div>
              )}
            </WriterRight>
          </WriterArea>
        </TopArear>
        <CenterArea>{board.content}</CenterArea>
      </Content>
      <ReplyArea>
        <ReplyAdd />
        <ReplyList>
          {replys.map((reply) => (
            <ReplyContent>
              <ReplyUser key={reply.id}>{reply.userId}</ReplyUser>
              <ReplyComent>
                <div>{reply.coment}</div>
                <div>{reply.createDate}</div>
              </ReplyComent>
            </ReplyContent>
          ))}
        </ReplyList>
      </ReplyArea>
    </Container>
  );
};

export default BoardDetail;
