import React, { useState } from 'react'
import AlternativeMessage from './AlternativeMessage'
import Message from './Message'

type MessageType = {
    id: number
    avatar: string
    name: string 
    message: string
    time: string | any 
}



function HW1() {

    const [dialog, setDialog] = useState<Array<MessageType>>([
        {
            id: 1,
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Sasha', message: 'Hello, my friends', time: '22:00'
        },
        {
            id: 2,
            avatar: 'https://i.pinimg.com/564x/69/07/a3/6907a3ecd829ce41a9fee86479597a39.jpg',
            name: 'Maksim', message: 'Hello, Sasha', time: '22:07'
        },
        {
            id: 3,
            avatar: 'https://i.pinimg.com/564x/56/2f/9c/562f9cbde8be047a6b3ca16927cbc75b.jpg',
            name: 'Sonya', message: 'yo yo yo', time: '22:15'
        }
    ])

    const addMessage = (title: string) => {
        let newMessage: MessageType = {
            id: 4, 
            avatar: dialog[rand].avatar,
            name:  dialog[rand].name, 
            message: title, 
            time: time()
        }
        setDialog([...dialog, newMessage])
    }


    const rand = Math.floor(Math.random()*dialog.length)
    
    const time = () => {
        
        const d = new Date()
        const m = d.getMinutes()
        const h = d.getHours()

        return <>{h}:{m}</>
    }

    const messageElements = dialog.map(m =>
        <Message key={m.id} id={m.id} avatar={m.avatar} name={m.name} message={m.message} time={m.time} />
    )


    return (
        <div>
            <hr />
            homeworks 1

            {/*should work (должно работать)*/}

            {messageElements}

            <hr />
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage addMessage={addMessage} />
            <hr />
        </div>
    )
}

export default HW1
