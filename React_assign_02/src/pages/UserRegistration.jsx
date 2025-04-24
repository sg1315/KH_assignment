import React from 'react'
import UseInput from '../components/UseInput'
import { useNavigate } from 'react-router-dom';

const UserRegistration = ({users, setUsers}) => {
    const id = UseInput('');
    const name = UseInput('');
    const age = UseInput('');
    const isOnline = UseInput('');
    const navigate = useNavigate();

    const userRegist = () => {
        const newUser = {
            id: id.value,
            name: name.value,
            age: parseInt(age.value),
            isOnline: isOnline.value === "true" ? true : false
        };

        setUsers([...users, newUser]);
        navigate('/');
    };

    return (
        <div>
            <input
                type="text"
                placeholder="id를 입력하세요"
                {...id}
            />
            <input
                type="text"
                placeholder="이름을 입력하세요"
                {...name}
            />
            <input
                type="text"
                placeholder="나이를 입력하세요"
                {...age}
            />
            <input
                type="text"
                placeholder="온라인 여부를 입력하세요(true/false)"
                {...isOnline}
            />
            <button onClick={userRegist}>등록</button>
        </div>
    )
}

export default UserRegistration