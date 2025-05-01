import React, { useEffect } from 'react';
import useBoardStore from '../store/boardStore';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  border: black 1px solid;
  margin-top: 70px;
  width: 80%;
  height: 80%;
  min-width: 1200px;
  min-height: 800px;
  border-radius: 8px;
  background: #bdbdbd;
`;

const BoardTagBar = styled.div`
  border-bottom: black 1px solid;
  width: 100%;
  height: 10%;
  min-width: 1200px;
  min-height: 50px;
  display: flex;
  justify-content: start;
  align-items: end;
`;

const TagButton = styled.button`
  border: black 1px solid;
  border-radius: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 10%;
  height: 80%;
  background: white;
`;

const BoardList = () => {
  const { boards, getBoards } = useBoardStore();

  useEffect(() => {
    getBoards();
  }, [getBoards]);

  return (
    <Container>
      <BoardTagBar>
        <TagButton>전체</TagButton>
        <TagButton>게임</TagButton>
      </BoardTagBar>
      {boards.map((board) => (
        <div>
          <h2>{board.title}</h2>
        </div>
      ))}
    </Container>
  );
};

export default BoardList;
