import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavBar = styled.div`
    display: flex;
    top: 0;
    margin: 0;
`

const Nav = () => {
    return (
        <NavBar>
            <Link to="/" style={{marginRight: 12}}>메인</Link>
            <Link to="/user" style={{marginRight: 12}}>유저 등록</Link>
        </NavBar>
    )
}

export default Nav