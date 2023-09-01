import { createContext, useContext, useEffect, useState } from "react";
import { UseContext } from "./UseContext";

type User = {
    id: string,
    name: string,
    age: number
}

type ContextType = {
    users: User[],
    addUser: ({ name, age } : { name: string, age: number }) => void
}

const ProviderContext = createContext<ContextType | null>(null)

export function useUsers() {
    const usersContext = useContext(ProviderContext)
    if(usersContext == null){
        throw new Error("Must use within Provider")
    }
    return usersContext
}

export default function Context(){
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        getUsers().then(setUsers)
    }, [])

    function addUser({ name, age } : { name: string, age: number }){
        setUsers(prevUsers => {
            return [...prevUsers, { id: crypto.randomUUID(), name, age }]
        })
    }
    return (
        <>
        <ProviderContext.Provider value = {{ users, addUser }}>
            <UseContext />
        </ProviderContext.Provider>
        </>
    )
}

function getUsers(){
    return Promise.resolve([
        { id: crypto.randomUUID(), name: "John", age: 35 },
        { id: crypto.randomUUID(), name: "Jane", age: 30 }
    ])
}