import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Routes from './routes';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </Router>
  )
}

export default App
