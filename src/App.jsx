import React from 'react';
import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Raffle from './components/Raffle/Raffle';


function App() {

  return (
    <div className="App">
        <Navbar />
        <main className='main container'>
          <div className='home-banner'>
            <img src="../assets/images/banner.png"/>
          </div>
          <div className="raffle-content">
            <div className='home-message'>
                <h1>Raffle Movies: What Should i Watch?</h1>
                <p>Based on a list of movies from 2 to 10, I, <span>Raffle Movies</span> will draw a suggestion for you, who are undecided on which movie or series to watch 😊</p>
            </div>
            <Raffle />
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default App
