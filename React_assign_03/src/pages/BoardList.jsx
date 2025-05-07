import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useBoardStore from '../store/boardStore';
import { performToast } from '../utils/performToast';
import useUserStore from '../store/userStore';
import {
  Container,
  BoardTopBar,
  BoardTagBar,
  TagButton,
  ButtonGroup,
  SearchSelect,
  SearchWrapper,
  SearchInput,
  SearchButton,
  WriteButton,
  BoardTable,
  Pagination,
  PageButton,
} from '../components/styled/BoardList';

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
              <td className="title" onClick={() => navigate(`/boards/${board.id}`)} style={{ cursor: 'pointer' }}>
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
          <PageButton key={i} onClick={() => setCurrentPage(i + 1)} $active={currentPage === i + 1}>
            {i + 1}
          </PageButton>
        ))}
      </Pagination>
    </Container>
  );
};

export default BoardList;
