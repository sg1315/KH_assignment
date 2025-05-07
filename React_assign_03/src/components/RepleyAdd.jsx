import React, { useState } from 'react';
import useReplyStore from '../store/replyStore';
import useUserStore from '../store/userStore';
import { useParams, useNavigate } from 'react-router-dom';
import { performToast } from '../utils/performToast';
import dayjs from 'dayjs';
import { ReplyInputBox, ReplyInput, ReplyButton } from './styled/ReplyAdd';

const ReplyAdd = () => {
  const [coment, setComent] = useState('');
  const { user, isAuthenticated } = useUserStore();
  const { id: boardId } = useParams();
  const { addReply, getReplysByBoardId } = useReplyStore();
  const navigate = useNavigate();

  const AddReply = async () => {
    if (!isAuthenticated) {
      performToast({ msg: '로그인이 필요합니다.', type: 'warning' });
      navigate('/login');
    }

    if (isAuthenticated && !coment.trim()) {
      alert('댓글을 입력하세요.');
      return;
    }

    const newReply = {
      boardId,
      userId: user?.id || 'anonymous',
      coment,
      createDate: dayjs().format('YY.MM.DD'),
    };

    await addReply(newReply);
    await getReplysByBoardId(boardId); // 등록 후 새로고침
    setComent('');
  };

  return (
    <ReplyInputBox>
      <ReplyInput value={coment} onChange={(e) => setComent(e.target.value)} placeholder="댓글을 입력하세요" />
      <ReplyButton onClick={AddReply}>등록</ReplyButton>
    </ReplyInputBox>
  );
};

export default ReplyAdd;
