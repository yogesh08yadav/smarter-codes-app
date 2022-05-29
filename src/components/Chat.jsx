import React, { useEffect, useState } from 'react'
import './style/chat.css'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMsg } from '../redux/actions';
import ChatHeader from './ChatHeader';

const Chat = () => {

    const { chatId } = useParams()
    const [chatName, setChatName] = useState('')
    const [getmsg, setGetMsg] = useState('')
    const [message, setMessage] = useState('')
    const [elem, setElem] = useState('')

    const list = useSelector(state => state.reducer.list)

    const dispatch = useDispatch()

    const sendMsg = (e) => {
        e.preventDefault()
        if(message === ''){
           return null
        }
        else{
        setGetMsg([...getmsg, message])
        let obj = list.find(e => e.id == chatId)
        setElem(list.find(e => e.id == chatId))
        const updatedList = list.map((e) => {
        return    e.id == chatId ? { ...e, messages: [...e.messages, message] } : e
        })
        dispatch(addNewMsg(updatedList))
        setMessage('')
    }
    }

    const starOnClick = (elem) => {
        let obj = list.find(e => e.id == chatId)
        if(obj.starred.indexOf(elem) == -1){
        const updatedList = list.map((e) => {
            return    e.id == chatId ? { ...e, starred: [...e.starred, elem] } : e
            })
            dispatch(addNewMsg(updatedList))
        }
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
                messages.map((item, idx) => (
                        <div className="chat_message" key={idx}>
                            <p key={idx} >{item}</p>
                            <span onClick={() => starOnClick(item)}><StarBorderIcon/></span>
                        </div>  
                ))
            }
            </div>



            <div className="chat_footer">
                <form action=""  onSubmit={sendMsg}>
                <input type="text" placeholder='Type the message' value={message} onChange={e => setMessage(e.target.value)} />
                </form>
                <div className="footer_options">
                    <div className="multi_options">
                        <ModeEditIcon style={{ color: 'gray' }} />
                        <StarBorderIcon style={{ color: 'gray' }} />
                        <InsertEmoticonIcon style={{ color: 'gray' }} />
                    </div>
                    <div className="send_option">
                        <IconButton>
                            <SendIcon style={{ color: 'gray' }} />

                        </IconButton>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Chat