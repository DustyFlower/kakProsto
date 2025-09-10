import {memo, useState} from "react";

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = memo(UsersSecret)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dymich', 'Valera', 'Artem', 'Katya'])

    const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}