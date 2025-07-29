import { useState } from 'react'
import FacialExpression from "./components/FacialExpression"
import './App.css'
import MoodSongs from './components/MoodSongs'
import Navbar from './components/Navbar'

function App() {
  const [Songs, setSongs] = useState([]);

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="blur-dot blur-blue-1"></div>
      <div className="blur-dot blur-blue-2"></div>
      <div className="blur-dot blur-blue-3"></div>
      <FacialExpression setSongs={setSongs} />
      <MoodSongs Songs={Songs} />
    </div>
  );
}

export default App

// ============================================

