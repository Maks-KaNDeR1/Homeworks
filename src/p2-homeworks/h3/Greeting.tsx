import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, onEnter } // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)



    return (
        <div>
            <input style={{
                marginLeft: '20px',
                backgroundColor: 'rgba(119, 140, 148, 0.452)'
            }}
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyDown={onEnter}
                onBlur={setNameCallback}
            />
            <span>{error}</span>
            <button style={{
                borderRadius: '0px 55px 55px 0',
                backgroundColor: 'rgba(79, 140, 148, 0.452)'
            }}
                onClick={addUser} disabled={!name}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
