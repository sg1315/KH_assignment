import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBoardStore from '../store/boardStore';
import styled from 'styled-components';
import { performToast } from '../utils/performToast';
import useUserStore from '../store/userStore';

const BoardList = () => {
  const { filteredBoards, getBoards, searchBoards, filterByCategory } = useBoardStore();
  const [searchType, setSearchType] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const navigate = useNavigate();
  const { isAuthenticated } = useUserStore();

  useEffect(() => {
    getBoards();
  }, [getBoards]);

  const searchBoardList = () => {
    searchBoards(searchType, searchKeyword);
    setCurrentPage(1);
  };

  const moveBoadEnrollForm = () => {
    if (!isAuthenticated) {
      performToast({ msg: '로그인이 필요합니다.', type: 'warning' });
      navigate('/login');
    } else {
      navigate('/enrollBoard');
    }
  };

  const categoryChoice = (category) => {
    filterByCategory(category);
    setCurrentPage(1);
  };

  // 페이징 계산 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBoards.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBoards.length / postsPerPage);

  return (
    <Container>
      <BoardTopBar>
        <BoardTagBar>
          {['전체', '영화', '음악', '책'].map((category) => (
            <TagButton key={category} onClick={() => categoryChoice(category)}>
              {category}
            </TagButton>
          ))}
        </BoardTagBar>
        <ButtonGroup>
          <SearchSelect value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="all">제목+내용</option>
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="writer">작성자</option>
          </SearchSelect>
          <SearchWrapper>
            <SearchInput
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchBoardList()}
              placeholder="검색어 입력"
            />
            <SearchButton onClick={searchBoardList}>검색</SearchButton>
          </SearchWrapper>
          <WriteButton onClick={moveBoadEnrollForm}>글쓰기</WriteButton>
        </ButtonGroup>
      </BoardTopBar>

      <BoardTable>
        <thead>
          <tr>
            <th>번호</th>
            <th>카테고리</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((board) => (
            <tr key={board.id}>
              <td>{board.id}</td>
              <td>{board.category}</td>
              <td
                className="title"
                onClick={() => navigate(`/boards/${board.id}`)}
                style={{ cursor: 'pointer' }}
              >
                {board.title}
              </td>
              <td>{board.userId}</td>
              <td>{board.createDate}</td>
            </tr>
          ))}
        </tbody>
      </BoardTable>

      <Pagination>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            $active={currentPage === i + 1}
          >
            {i + 1}
          </PageButton>
        ))}
      </Pagination>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
  width: 80%;
  min-width: 1200px;
  background: #f5f5f5;
  color: #222;
`;

const BoardTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #aaa;
  background: #e0e0e0;
`;

const BoardTagBar = styled.div`
  display: flex;
`;

const TagButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background: #ffffff;
  border: 1px solid #aaa;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
    border-color: #000000;
    text-decoration: underline;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchSelect = styled.select`
  padding: 6px;
  font-size: 12px;
  border: 1px solid #aaa;
  background: #fff;
  border-radius: 8px;
`;

const SearchWrapper = styled.div`
  display: flex;
  border: 1px solid #aaa;
  overflow: hidden;
  border-radius: 8px;
`;

const SearchInput = styled.input`
  padding: 6px;
  font-size: 12px;
  border: none;
  outline: none;
  width: 200px;
`;

const SearchButton = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  background: #ddd;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;

const WriteButton = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  background: #c2c2ff;
  color: white;
  border: 1px solid #c2c2ff;
  cursor: pointer;

  &:hover {
    background: #b8b8fe;
  }
`;

const BoardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 13px;

  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  thead {
    background: #eaeaea;
    font-weight: bold;
  }

  tbody tr:hover {
    background-color: #f0f0f0;
  }

  th:nth-child(1), td:nth-child(1) {
    width: 8%;
  }

  th:nth-child(2), td:nth-child(2) {
    width: 12%;
  }

  th:nth-child(3), td:nth-child(3) {
    width: 60%;
    text-align: left;
    cursor: pointer;
  }

  td:nth-child(3):hover {
    text-decoration: underline;
  }

  th:nth-child(4), td:nth-child(4) {
    width: 10%;
  }

  th:nth-child(5), td:nth-child(5) {
    width: 10%;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  gap: 6px;
  background: white;
`;

const PageButton = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  background: ${({ $active }) => ($active ? '#9999ff' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;

export default BoardList;
