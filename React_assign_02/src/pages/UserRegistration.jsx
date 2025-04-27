import React from 'react'
import UseInput from '../components/useContext/UseInput'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/useContext/UserContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';    

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;
    height: 500px;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

const RegistInput = styled.input`
    background-color: white;
    color: black;
    width: 80%;
    padding: 10px;
    margin: 20px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    &:focus {
        border-color: #007bff;
        outline: none;
    }
`

const RegistSelect = styled.select`
    background-color: white;
    color: black;
    width: 83%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    font-size: 16px;
`

const RegistButton = styled.button`
    width: 83%;
    padding: 10px;
    margin: 20px 0;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
    &:active {
        background-color: #004085;
    }
`

const HomeButton = styled(Link)`
    width: 80%;
    padding: 10px;
    margin: 20px 0;
    background-color: #696969;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;

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


const UserRegistration = () => {
    const { addUser } = useUser();
    const id = UseInput('');
    const name = UseInput('');
    const age = UseInput('');
    const isOnline = UseInput('');
    const navigate = useNavigate();

    const userRegist = () => {

        if (id.value.trim() === '') {
            alert('ID를 입력하세요.');
            return;
        }
        
        if (name.value.trim() === '') {
            alert('이름을 입력하세요.');
            return;
        }
        if (age.value.trim() === '') {
            alert('나이를 입력하세요.');
            return;
        }
        if (isNaN(age.value)) {
            alert('나이는 숫자만 입력할 수 있습니다.');
            return;
        }
        if (isOnline.value === '') {
            alert('상태를 선택하세요.');
            return;
        }

        const newUser = {
            id: id.value,
            name: name.value,
            age: parseInt(age.value),
            isOnline: isOnline.value === "true" ? true : false
        };

        addUser(newUser);
        navigate('/');
    };

    return (
        <Container>
            <RegistInput
                type="text"
                placeholder="id를 입력하세요"
                {...id}
            />
            <RegistInput
                type="text"
                placeholder="이름을 입력하세요"
                {...name}
            />
            <RegistInput
                type="text"
                placeholder="나이를 입력하세요"
                {...age}
            />
            <RegistSelect {...isOnline}>
                <option value="">상태를 선택하세요</option>
                <option value="true">온라인</option>
                <option value="false">오프라인</option>
            </RegistSelect>
            <RegistButton onClick={userRegist}>등록</RegistButton>
            <HomeButton to="/">취소</HomeButton>
        </Container>
    )
}

export default UserRegistration