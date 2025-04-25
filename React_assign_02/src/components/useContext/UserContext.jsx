import React, {createContext, useContext} from 'react'

const UserContext = React.createContext();

export function UserProvider({children}) {
    const users = [
        {
            id: "user01",
            name: '김승기',
            age: 27,
            isOnline: true
        }, {
            id: "user02",
            name: '둘리',
            age: 42,
            isOnline: true
        }, {
            id: "user03",
            name: '또치',
            age: 44,
            isOnline: false
        }, {
            id: "user04",
            name: '도우너',
            age: 42,
            isOnline: true
        }, {
            id: "user05",
            name: '마이콜',
            age: 61,
            isOnline: false
        }, {
            id: "user06",
            name: '고길동',
            age: 82,
            isOnline: true
        }
    ];

    return (
        <UserContext.Provider value={users}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext);
}