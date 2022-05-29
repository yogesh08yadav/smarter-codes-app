import React from 'react'
import './style/sidebarChat.css'
import LetteredAvatar from 'react-lettered-avatar';
import { Link } from 'react-router-dom';

const SidebarChat = ({elem}) => { 
    
    return (
             <Link style={{textDecoration:'none',color:'black'}} to={`/chat/${elem.id}`} >
                <div className='sidebarChat'>
                    <LetteredAvatar name={elem.name} backgroundColor='#096DDB'   />
                    <div className='chat' >
                    <div className="chat_info">
                        <h2>{elem.name}</h2>
                        <p>{elem.messages.slice(-1)}</p>
                    </div>
                    <p>{elem.moment}</p>
                </div>
                </div>
                </Link>
    )
}

export default SidebarChat