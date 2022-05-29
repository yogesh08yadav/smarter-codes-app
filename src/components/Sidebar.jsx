import React, { useState } from 'react'
import './style/sidebar.css'
import Button from '@mui/material/Button';
import SidebarChat from './SidebarChat';
import { useDispatch, useSelector } from 'react-redux';
import { addNewChat } from '../redux/actions';
import moment from 'moment';

const Sidebar = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [name, setName] = useState('')

    const dispatch = useDispatch()
    const list = useSelector(state => state.reducer.list)

    const addBtn = (e) => {
        e.preventDefault()
        const getTime = moment(list.createdAt).fromNow()
        if(name === ''){
            alert("Enter the name")
        }
        else{
            const data = {
                id: new Date().getMilliseconds(),
                moment : getTime,
                name: name,
                messages: [],
                starred:[]
            }
            dispatch(addNewChat(data))
            setName('')
            setIsClicked(false)
        }
    }
    

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <h4>All Chats</h4>
                <Button style={{ height: '30px', marginTop: '12px', marginRight: '5px' }} onClick={() => setIsClicked(!isClicked)} variant="contained">New Chat</Button>
            </div>
            {
                isClicked &&
                <div className='sidebar_input' >
                    <form action="" onSubmit={addBtn}>
                    <input type="text" value={name} onChange={e => setName(e.target.value)}  placeholder='Enter the name' />
                    </form>
                </div>
            }
            {
                list.map((elem, idx) => {

                   return <SidebarChat elem={elem} key={idx} />
                })
            }

        </div>
    )
}

export default Sidebar