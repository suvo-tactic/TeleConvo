import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import db from './firebase';
import './SidebarChat.css'


function SidebarChat({id,name, addNewChat }) {

    const createChat = () =>{
        const roomName = prompt("Please Enter Chat Name");

        if(roomName){
            
            db.collection("rooms").add({
                name: roomName,
                
            });
        }
    };

    return !addNewChat ?(
        <Link to={`/rooms/${id}`}>
        <div className="sidebarchat">
            
            <Avatar/>
            <div className="sidebarchat_info">
                <h2>{name}</h2>
                <p>Last message...</p>
            </div>
        </div>
        </Link>
    ):(
        <div className="sidebarchat" onClick={createChat}  >
            <h2>New Chat</h2>
        </div>
    );
}

export default SidebarChat
