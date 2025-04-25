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

const RegistButton = styled.button`
    background-color: white;
    color: black;
`

const UserList = () => {
    const { users } = useUser();

    return (
        <>
            <RegistButton>
                <Link to="/user">유저 등록</Link>
            </RegistButton>
            <Container>
                {users.map((users) => (
                    <UserCard key={users.id} user={users} />
                ))}
            </Container>
        </>
    )
}

export default UserList