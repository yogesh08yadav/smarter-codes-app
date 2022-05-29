import React, { useEffect, useState } from 'react'
import './style/chatHeader.css'
import LetteredAvatar from 'react-lettered-avatar';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const ChatHeader = () => {
    const [chatName, setChatName] = useState('')
    const list = useSelector(state => state.reducer.list)

    const { chatId } = useParams()

    useEffect(() => {
        if (chatId) {
            let obj = list.find(e => e.id == chatId)
            setChatName(obj.name)
        }
    }, [chatId])


  return (
    <div className="chat_header">
    <LetteredAvatar name={chatName} backgroundColor='#096DDB' />
    <h3>{chatName}</h3>
    <div className="options">
        <Link to={`/chat/${chatId}`} style={{ textDecoration: 'none', color: 'black' }}> <p>Chat</p> </Link>
        <Link to={`/chat/${chatId}/starred`} style={{ textDecoration: 'none', color: 'black' }}> <p>Starred Messages</p></Link>
    </div>
    </div>
  )
}

export default ChatHeader