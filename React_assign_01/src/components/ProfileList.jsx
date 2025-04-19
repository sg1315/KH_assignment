import React from 'react'
import styled from 'styled-components'
import ProfileCard from './ProfileCard'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
`

const ProfileList = ({profiles}) => {
    return (
        <Container>
            {profiles.map((profile, index) => (
                <ProfileCard key={index} profile={profile} />
            ))}
        </Container>
    )
}

export default ProfileList