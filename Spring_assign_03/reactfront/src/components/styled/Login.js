import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  min-width: 600px;
  margin: 80px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Label = styled.label`
  margin: 10px 0 5px;
  font-size: 14px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const SubmitButton = styled.button`
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

export const RegisterButton = styled.button`
  margin: 0px 10px;
  padding: 12px 20px;
  background-color: #8dff91;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #62fb69;
  }
`;

export const Error = styled.div`
  color: red;
  margin-bottom: 20px;
  text-align: center;
`;
