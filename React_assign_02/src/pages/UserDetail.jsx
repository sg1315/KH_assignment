import React from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from '../components/useContext/UserContext';

const UserDetail = () => {
    const {id} = useParams();
    const { users } = useUser();
    const user = users.find(user => user.id === id);
    
    return (
        <div>
            <h2>userName : {user.name}</h2>
            <h2>userAge : {user.age}</h2>
            <h2>userIsOnline : {user.isOnline === true ? "온라인" : "오프라인"}</h2>
        </div>
    )
}

export default UserDetail