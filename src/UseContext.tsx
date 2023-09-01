import { useUsers } from "./Context"

export function UseContext(){
    const { users } = useUsers()
    return (
        <>
        <ul>
            {users.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
        </>
    )
}