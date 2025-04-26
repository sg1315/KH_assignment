import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    background: #696969;
    color: white;
    display: flex;
    text-align: center;
    justify-content: start;
`

const NavContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const LinkText = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 12px;
    margin: 12px;

    &:hover {
        background: #808080;
        color: white;
        text-decoration: none;
        border-radius: 5px;
    }
    &:active {
        background: #696969;
    }
`


const Nav = () => {
    return (
        <NavBar>
            <NavContent>
            <LinkText to="/">메인</LinkText>
            <LinkText to="/user">유저 등록</LinkText>
            </NavContent>
        </NavBar>
    )
}

export default Nav