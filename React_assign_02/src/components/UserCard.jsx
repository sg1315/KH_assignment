import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useUser } from './useContext/UserContext'

const Container = styled.div`
    width: 320px;
    background: #ffffff;
`

const Card = styled.div`
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
    background: #ffffff;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const UserName = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #333333;
`
const UserAge = styled.div`
    font-size: 16px;
    color: #666666;
`

const UserStatus = styled.div`
    font-size: 14px;
    color: black;
    font-weight: bold;
`;

const StatusDot = styled.span`
    color: ${props => props.$isOnline ? '#4CAF50' : '#F44336'};
`;

const UserCard = ({ user }) => {
    return (
        <Container>
            <Card>
                <Link to={`user/${user.id}`}>
                    <UserName>{user.name}</UserName>
                    <UserAge>{user.age}세</UserAge>
                    <UserStatus>
                        <StatusDot $isOnline={user.isOnline}>●</StatusDot> 
                        {user.isOnline ? '온라인 상태입니다.' : '오프라인 상태입니다.'}
                    </UserStatus>
                </Link>
            </Card>
        </Container>
    );
};

export default UserCard