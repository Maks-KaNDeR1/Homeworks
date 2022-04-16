import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import s from './AlternativeMessage.module.css'

type PropsType = {
    addMessage: (title: string) => void
    scroll: any
}

function AlternativeMessage(props: PropsType) {

    const [title, setTitle] = useState('')

    const hendleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onMessageClick = () => {
        props.addMessage(title)
        setTitle('')
        setTimeout(() => {
            props.scroll.current.scrollIntoView({ behavior: 'smooth' })
        }, 0)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onMessageClick()
        }
    }

    return (
        
        <div className={s.items} >
            <input value={title} type='text'
            placeholder=' New message...'
                onChange={hendleOnChange}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={onMessageClick}>Send</button>
        </div>
    )
}


export default AlternativeMessage
