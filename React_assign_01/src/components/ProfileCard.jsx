import React from 'react'
import styled from 'styled-components'

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

const ProfileName = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #333333;
`
const ProfileAge = styled.div`
    font-size: 16px;
    color: #666666;
`

const ProfileStatus = styled.div`
    font-size: 14px;
    color: black;
    font-weight: bold;
`;

const StatusDot = styled.span`
    color: ${props => props.isOnline ? '#4CAF50' : '#F44336'};
`;

const ProfileCard = ({profile}) => {
    return (
        <Container>
            <Card>
            <ProfileName>{profile.name}</ProfileName>
            <ProfileAge>{profile.age}세</ProfileAge>
            <ProfileStatus>
                <StatusDot isOnline={profile.isOnline}>●</StatusDot> {profile.isOnline ? '온라인 상태입니다.' : '오프라인 상태입니다.'}
            </ProfileStatus>
            </Card>
        </Container>
    )
}

export default ProfileCard