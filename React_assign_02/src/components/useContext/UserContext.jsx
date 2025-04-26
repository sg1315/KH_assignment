import React, {createContext, useContext, useState} from 'react'

const UserContext = React.createContext();

export function UserProvider({children}) {
    const [users, setUsers] = useState([
        {
            id: "user01",
            name: '김승기',
            age: 27,
            isOnline: true,
        }, {
            id: "user02",
            name: '둘리',
            age: 42,
            isOnline: true,
        }, {
            id: "user03",
            name: '또치',
            age: 44,
            isOnline: false,
        }, {
            id: "user04",
            name: '도우너',
            age: 42,
            isOnline: true,
        }, {
            id: "user05",
            name: '마이콜',
            age: 61,
            isOnline: false,
        }, {
            id: "user06",
            name: '고길동',
            age: 82,
            isOnline: true,
        }
    ]);
    
    const addUser = (newUser) => {
        setUsers(prev => [...prev, newUser]);
    };

    const deleteUser = (id) => {
        setUsers(prev => prev.filter(user => user.id !== id));
    };

    return (
        <UserContext.Provider value={{ users, addUser, deleteUser }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext);
}