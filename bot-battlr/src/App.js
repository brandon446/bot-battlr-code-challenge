import './App.css';
import React,{useEffect, useState} from 'react';
import {Routes, Route } from "react-router-dom";
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import Navbar from './Components/Navbar';

function App() {
  const [bot ,setBot] = useState([])

  useEffect(() =>{

    fetch(" http://localhost:8001/bots")
    .then(res => res.json())
    .then(data => setBot(data))
  },[])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/bots" element={<BotCollection bot = {bot} setBot = {setBot} />}/>
        <Route path = "/yourbots" element={<YourBotArmy bot = {bot} />}/>

      </Routes>
    </div>
  );
}

export default App;
