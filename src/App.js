import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
function App() {
  return (
    <div className="app">
    {/* <h1>Lets build a TeleConvo</h1> */}

    <div className="app_body">
      <Sidebar />
      <Chat />
    </div>
    </div>
  );
}

export default App;
