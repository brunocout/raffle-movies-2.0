import React from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Raffle from './components/Raffle/Raffle';
import Suggest from './components/Suggest/Suggest';


function App() {

  return (
    <div className="App">
        <Navbar />
        <main className='main container'>
          <div className='home-banner'>
            <img src="../assets/images/banner.png"/>
          </div>
          <Raffle />
        </main>
        <Suggest />
        <Footer />
    </div>
  )
}

export default App
