import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
function App() {
  return (
    <div className="app">
    {/* <h1>Lets build a TeleConvo</h1> */}

    <div className="app_body">
      <Router>
    <Switch>

    <Sidebar />

    <Route path="/rooms/:roomId">
      
      <Chat />
      </Route>

    <Route path="/">
      <Chat />
    </Route>

      </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
