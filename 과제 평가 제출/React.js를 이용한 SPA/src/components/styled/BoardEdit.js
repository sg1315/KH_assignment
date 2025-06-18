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
`;

export const Form = styled.form`
  width: 80%;
  height: 80%;
`;

export const TopArear = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  width: 18%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TitleInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 70%;
  resize: none;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  min-height: 150px;
`;

export const ButtonArea = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const SubmitButton = styled.button`
  width: 20%;
  padding: 12px 20px;
  background-color: #c2c2ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b8b8fe;
  }
`;
