import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
function SidebarChat({ addNewChat }) {

    const createChat = () =>{
        const roomName = prompt("Please Enter Chat Name");

        if(roomName){

        }
    };

    return !addNewChat ?(
        <div className="sidebarchat">
            
            <Avatar/>
            <div className="sidebarchat_info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ):(
        <div className="sidebarchat" onClick={createChat}  >
            <h2>New Chat</h2>
        </div>
    );
}

export default SidebarChat
