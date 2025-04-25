import React from 'react'
import styled from 'styled-components'
import { useUser } from '../components/useContext/UserContext'
import UserCard from '../components/UserCard'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 16px;
`



const UserList = () => {
    const { users } = useUser();

    return (
        <Container>
            {users.map((users) => (
                <UserCard key={users.id} user={users} />
            ))}
        </Container>
    )
}

export default UserList