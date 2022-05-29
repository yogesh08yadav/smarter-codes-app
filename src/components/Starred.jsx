import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import './style/starred.css'
import { addNewMsg } from '../redux/actions';
import ChatHeader from './ChatHeader';

const Starred = () => {
    const [chatName, setChatName] = useState('')
    const list = useSelector(state => state.reducer.list)

    const { chatId } = useParams()

    const dispatch = useDispatch()

    const removeStarred = (elem) => {
        let obj = list.find(e => e.id == chatId)
        let index =  obj.starred.filter(f => f !== elem)
        
        const updatedList = list.map((e) => {
            return  ( 
                 e.id == chatId ? { ...e, starred: index } : e
        )})
            dispatch(addNewMsg(updatedList))
    }

    useEffect(() => {
        if (chatId) {
            let obj = list.find(e => e.id == chatId)
            setChatName(obj.name)
        }
    }, [chatId])

    return (
        <div className='chat_right'>
           <ChatHeader/>


                <div className="chat_body">
                    {
                        list.find(e => e.id == chatId).
                            starred.map((item, idx) => (
                                <div className="chat_message" key={idx}>
                                    <p key={idx} >{item}</p>
                                    <span onClick={() => removeStarred(item)}><UnsubscribeIcon /></span>
                                </div>
                            ))
                    }
                </div>

            </div>
    )
}

export default Starred