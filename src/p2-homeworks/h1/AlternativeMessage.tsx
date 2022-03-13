import React, { ChangeEvent, KeyboardEvent, useState } from 'react'


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
        
        <div>
            <input style={{
                marginLeft: '30px',
                backgroundColor: 'rgba(119, 140, 148, 0.452)'
            }}
                value={title} type='text'
                onChange={hendleOnChange}
                onKeyPress={onKeyPressHandler}
            />
            <button
            
            style={{
                borderRadius: '0px 55px 55px 0',
                backgroundColor: 'rgba(79, 140, 148, 0.452)'
            }}
                onClick={onMessageClick}>Send</button>
        </div>
    )
}

export default AlternativeMessage
