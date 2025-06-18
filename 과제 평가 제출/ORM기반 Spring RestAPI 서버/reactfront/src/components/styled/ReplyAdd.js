import styled from 'styled-components';

export const ReplyInputBox = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;
  padding: 0 30px;
  margin-bottom: 20px;
`;

export const ReplyInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 14px;
`;

export const ReplyButton = styled.button`
  padding: 8px 12px;
  background-color: #c2c2ff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;

  &:hover {
    background-color: #a8a8ff;
  }
`;
