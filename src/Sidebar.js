import React from 'react'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { Avatar, IconButton } from "@material-ui/core"
import { SearchOutlined } from "@material-ui/icons"
import './Sidebar.css'
import SidebarChat from './SidebarChat';
function Sidebar(){
    return (
        
            <div className="sidebar">
                
              <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_headerRight">
                    <IconButton><DonutLargeIcon/></IconButton>
                    <IconButton><ChatIcon/></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                   

                </div>

              </div>
              <div className="sidebar_search">
                  <div className="sidebar_container">
                    <SearchOutlined/>
                    <input placeholder="Search " type="text"/>
                  </div>
              </div>

              <div className="sidebar_chats">
                  <SidebarChat addNewChat/>
                  <SidebarChat/>
                  <SidebarChat/>
                  <SidebarChat/>
                  
              </div>

            </div>
       
    );
}

export default Sidebar