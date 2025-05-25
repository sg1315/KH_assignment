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
  const { board_no } = useParams();
  const [board, setBoard] = useState(null);
  const { getBoardDetail, deleteBoard } = useBoardStore();
  const { user, isAuthenticated } = useUserStore();
  const { replys, getReplysByBoardId } = useReplyStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const boardData = await getBoardDetail(board_no);
        setBoard(boardData);
      } catch (error) {
        console.error('게시글 정보를 가져오는 데 실패했습니다.', error);
      }
    };

    fetchBoard();
  }, [board_no, getBoardDetail]);

  useEffect(() => {
    getReplysByBoardId(board_no);
  }, [board_no]);

  if (!board) return <div>Loading...</div>;

  const canEditOrDelete = isAuthenticated && user.user_id === board.board_writer;

  const boardEdit = () => {
    navigate(`/boards/edit/${board.board_no}`);
  };

  const boardDelete = async () => {
    const confirmDelete = window.confirm('정말로 삭제하시겠습니까?');
    if (!confirmDelete) return;

    try {
      await deleteBoard(board.board_no);
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
            [{board.category}] {board.board_title}
          </TitleArea>
          <WriterArea>
            <WriterLeft>
              {board.board_writer} | {board.create_date}
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
        <CenterArea>{board.board_content}</CenterArea>
      </Content>
      <ReplyArea>
        <ReplyAdd />
        <ReplyList>
          {replys.map((reply) => (
            <ReplyContent key={reply.reply_no}>
              <ReplyUser>{reply.reply_writer}</ReplyUser>
              <ReplyComent>
                <span>{reply.reply_content}</span>
                <span>{reply.create_date}</span>
              </ReplyComent>
            </ReplyContent>
          ))}
        </ReplyList>
      </ReplyArea>
    </Container>
  );
};

export default BoardDetail;
