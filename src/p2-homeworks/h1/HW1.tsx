import React, { useState } from 'react'
import { v1 } from 'uuid'
import AlternativeMessage from './AlternativeMessage'
import Message from './Message'
import s from './Message.module.css'

type MessageType = {
    id: string
    avatar: string
    name: string
    message: string
    time: string | any
}



function HW1() {

    const [dialog, setDialog] = useState<Array<MessageType>>([
        {
            id: v1(),
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Sasha', message: 'Hello, my friends', time: '22:00'
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg',
            name: 'Maksim', message: 'Hi all', time: '22:07'
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/564x/56/2f/9c/562f9cbde8be047a6b3ca16927cbc75b.jpg',
            name: 'Sonya', message: 'yo yo yo', time: '22:15'
        },
        {
            id: v1(),
            avatar: 'https://top-tok.ru/wp-content/uploads/e8a52fc5-620c-4d7c-8f34-ddd8f605f95a.jpg',
            name: 'Natali', message: 'How a you?', time: '22:17'
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg',
            name: 'Maksim', message: 'Everything is fine', time: '22:18'
        },
        {
            id: v1(),
            avatar: 'https://i.pinimg.com/originals/38/20/44/382044ab16b8772d62a6043dc202bd86.jpg',
            name: 'Galya', message: 'What do you do', time: '22:19'
        },
        {
            id: v1(),
            avatar: 'https://papik.pro/uploads/posts/2022-01/thumbs/1642409371_29-papik-pro-p-gacha-stikeri-31.jpg',
            name: 'Dima', message: 'I went out for a walk', time: '22:19'
        },
        {
            id: v1(),
            avatar: 'https://yt3.ggpht.com/a/AATXAJwg1JVXn5R_VJH_tSFHvGrBbwGEfEW0yDUBAgDkag=s900-c-k-c0xffffffff-no-rj-mo',
            name: 'Alina', message: 'I will sleep', time: '22:23'
        }
    ])

    const addMessage = (title: string) => {
        let newMessage: MessageType = {
            id: v1(),
            avatar: dialog[rand].avatar,
            name: dialog[rand].name,
            message: title,
            time: time()
        }
        setDialog([...dialog, newMessage])

    }


    const rand = Math.floor(Math.random() * dialog.length)

    const time = () => {

        const d = new Date()
        const m = d.getMinutes()
        const h = d.getHours()

        return <>{h}:{m}</>
    }

    const messageElements = dialog.map(m =>
        <Message key={m.id} id={m.id} avatar={m.avatar} name={m.name} message={m.message} time={m.time} />
    )

    const scroll = React.useRef(null)




    return (
        <div >
            <hr />
            homeworks 1
            <div style={{ overflow: 'auto', height: '400px' }} >
                {messageElements}
                <div ref={scroll} ></div>
            </div>
            <hr />
            <div>
                <AlternativeMessage scroll={scroll} addMessage={addMessage} />
            </div>
            <hr />
        </div>
    )
}

export default HW1
