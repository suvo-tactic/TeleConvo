import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React,{useEffect , useState} from 'react';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./Chat.css";
import { useParams } from 'react-router-dom';
import db from './firebase';
function Chat() {
    const [input, setInput] = useState("");
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
        
            if(roomId){
                
                db.collection('rooms').doc(roomId).onSnapshot((snapshot) => 
                setRoomName(snapshot.data().name));
            }
        
    }, [roomId]);

    const sendMessage =(e)=>{
        e.preventDefault();
        console.log('Typed',input);
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar/>
                <div className="chat_headerinfo">
                    <h3>{roomName}</h3>
                    <p>last seen today at 10:53pm</p>
                </div>

                <div className="chat_headerRight">
                    <IconButton><i class="icons"><SearchOutlined/></i></IconButton>
                    <IconButton><i class="icons"><AttachFile/></i></IconButton>
                    <IconButton><i class="icons"><MoreVert/></i></IconButton>
                </div>

            </div>
            <div className="chat_body">
            {/* <div className="avatar"> <Avatar/> */}
            <p className={`chat_message ${true && 'chat_receiver'}`}>
            
            
            <span className="chat_name">Sony</span>
            <div className="text">Hey Guys
            <span className="chat_timestamp">10:52pm</span>
            </div>
            </p>
            {/* </div> */}
            {/* <div className="avatar"> <Avatar/> */}
            <p className="chat_message">Hey Guys</p>
            </div>
            {/* </div> */}

            <div className="chat_footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon/>
                </div>
        </div>
    )
}

export default Chat
