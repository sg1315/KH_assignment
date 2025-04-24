import React from 'react'
import styled from 'styled-components'
import UserCard from '../components/UserCard'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
`

const UserList = ({users}) => {
    return (
        <Container>
            {users.map((users) => (
                <UserCard key={users.id} user={users} />
            ))}
        </Container>
    )
}

export default UserList