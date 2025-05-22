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

export const Info = styled.div`
  width: 80%;
  height: 80%;
`;

export const TopArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
  align-items: center;
`;

export const InfoTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const MiddleArea = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoArea = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 10px;
`;

export const InfoLabel = styled.label`
  width: 20%;
  font-size: 16px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  color: #333;
`;

export const InfoText = styled.p`
  width: 80%;
  height: 50px;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ButtonArea = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: right;
  gap: 10px;
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
