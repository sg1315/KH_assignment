import styled from 'styled-components';

export const Container = styled.div`
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
  flex-direction: column;
  padding: 20px;
`;

export const Content = styled.div`
  width: 90%;
  height: 70%;
`;

export const TopArear = styled.div`
  width: 100%;
  height: 20%;
  padding-bottom: 20px;
  border-bottom: 1px solid #aaa;
`;

export const TitleArea = styled.div`
  width: 100%;
  height: 50%;
  font-size: 24px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const WriterArea = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WriterLeft = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const WriterRight = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const EditButton = styled.button`
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

export const DeleteButton = styled.button`
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

export const CenterArea = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: left;
  align-items: start;
  padding: 20px 0;
  font-size: 20px;
`;

export const ReplyArea = styled.div`
  width: 90%;
  height: 30%;
`;

export const ReplyAdd = styled.div`
  background: #ffffff;
  width: 100%;
  height: 40%;
  padding: 0 30px;
  margin-bottom: 20px;
`;

export const ReplyList = styled.div`
  width: 100%;
  height: 60%;
`;

export const ReplyContent = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  padding: 0 30px;
  margin-bottom: 10px;
`;

export const ReplyUser = styled.label`
  width: 10%;
  font-size: 16px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: bold;
  color: #333;
  border-bottom: 1px solid black;
`;

export const ReplyComent = styled.p`
  width: 90%;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;
