import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const HomeButton = styled.button`
    background: #696969;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>페이지를 찾을 수 없습니다. (404)</h2>
            <HomeButton onClick={() => navigate("/")}>홈으로 가기</HomeButton>
        </div>
    )
}

export default NotFound