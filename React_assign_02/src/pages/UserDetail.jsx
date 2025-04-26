import React from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from '../components/useContext/UserContext';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 600px;
    height: 500px;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 75%;
    background-color: white;
    color: black;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
`

const StatusDot = styled.span`
    color: ${props => props.$isOnline ? '#4CAF50' : '#F44336'};
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 20%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 10px;
`

const HomeButton = styled.button`
    width: 20%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`

const DeleteButton = styled.button`
    width: 20%;
    padding: 10px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
        background-color: #c82333;
    }
`

const UserDetail = () => {
    const {id} = useParams();
    const { users, deleteUser } = useUser();
    const user = users.find(user => user.id === id);
    const navigate = useNavigate();

    const handleDelete = () => {
        deleteUser(id);
        navigate('/');
    };
    
    return (
        <Container>
            <UserInfo>
                <h1>유저 상세 정보</h1>
                <h2>이름 : {user.name}</h2>
                <h2>나이 : {user.age}</h2>
                <h2>
                    <StatusDot $isOnline={user.isOnline}>●</StatusDot> {user.isOnline ? '온라인 상태입니다.' : '오프라인 상태입니다.'}
                </h2>
            </UserInfo>
            <ButtonContainer>
                <HomeButton onClick={() => navigate('/')}>홈으로</HomeButton>
                <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
            </ButtonContainer>
        </Container>
    )
}

export default UserDetail