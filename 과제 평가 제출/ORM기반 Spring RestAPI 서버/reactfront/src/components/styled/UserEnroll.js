import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 70px;
  width: 80%;
  min-width: 600px;
  height: 40vh;
  background: #f9f9f9;
  color: #222;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 80%;
  height: 80%;
`;

export const InputArea = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  width: 20%;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const ValueInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ButtonArea = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: right;
  gap: 10px;
`;

export const CancelButton = styled.button`
  width: 30%;
  padding: 6px 10px;
  background-color: #c2c2ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b8b8fe;
  }
`;

export const SubmitButton = styled.button`
  width: 30%;
  padding: 6px 10px;
  background-color: #c2c2ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b8b8fe;
  }
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 10px;
`;
