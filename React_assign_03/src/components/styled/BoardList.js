import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  width: 80%;
  min-width: 1200px;
  background: #f5f5f5;
  color: #222;
`;

export const BoardTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #aaa;
  background: #e0e0e0;
`;

export const BoardTagBar = styled.div`
  display: flex;
`;

export const TagButton = styled.button`
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

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SearchSelect = styled.select`
  padding: 6px;
  font-size: 12px;
  border: 1px solid #aaa;
  background: #fff;
  border-radius: 8px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  border: 1px solid #aaa;
  overflow: hidden;
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  padding: 6px;
  font-size: 12px;
  border: none;
  outline: none;
  width: 200px;
`;

export const SearchButton = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  background: #ddd;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;

export const WriteButton = styled.button`
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

export const BoardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-size: 13px;

  th,
  td {
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

  th:nth-child(1),
  td:nth-child(1) {
    width: 8%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 12%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 60%;
    text-align: left;
    cursor: pointer;
  }

  td:nth-child(3):hover {
    text-decoration: underline;
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 10%;
  }

  th:nth-child(5),
  td:nth-child(5) {
    width: 10%;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  gap: 6px;
  background: white;
`;

export const PageButton = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  background: ${({ $active }) => ($active ? '#9999ff' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }
`;
