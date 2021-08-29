import React, {useEffect, useState} from 'react'
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { Avatar, IconButton } from "@material-ui/core"
import { SearchOutlined } from "@material-ui/icons"
import './Sidebar.css'
import db from "./firebase";
import SidebarChat from './SidebarChat';
//  import {collection ,query,snapshot}  from "firebase/firestore";



function Sidebar(){
  const [rooms, setRooms] = useState([]);

  useEffect(()=>{
    const unsubscribe = db.collection("rooms").onSnapshot(snapshot =>
        setRooms(
          snapshot.docs.map((doc) =>
          ({
            id: doc.id,
            data: doc.data(),
          }))
          )
        );
        return () =>{
          unsubscribe();
        }
  },[]);

    return (
        
            <div className="sidebar">
                
              <div className="sidebar_header">
                <Avatar />
                <div className="sidebar_headerRight">
                    <IconButton><i class="icons"><DonutLargeIcon/></i></IconButton>
                    <IconButton><i class="icons"><ChatIcon/></i></IconButton>
                    <IconButton><i class="icons"><MoreVertIcon /></i></IconButton>
                   

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
                  {rooms.map(room =>(
                    <SidebarChat key ={room.id} id={room.id}
                    name={room.data.name} />
                  ))}
                  
                 
                  
                  
              </div>

            </div>
       
    );
}

export default Sidebar;