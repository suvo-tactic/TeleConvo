import React,{useState} from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Login from "./Login";
function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
    {/* <h1>Lets build a TeleConvo</h1> */}
    {!user ? (
     <Login/>
    ) :(
    <div className="app_body">
      <Router>
    <Switch>

    
    
    <Route path="/rooms/:roomId">
    <Sidebar />
      <Chat />
      </Route>

    <Route path="/">
      {/* <Chat /> */}
      <Sidebar />
      <h1>Hello</h1>
      
    </Route>

      </Switch>
      </Router>
    </div>
    )}
    </div>
  );
    
}

export default App;
