import React from 'react';
import './App.css'
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App">
        <div className='home-message'>
            <h1>Raffle Movies</h1>
            <p>Based on a list of movies from 2 to 10, I, <span>Raffle Movies</span> will draw a suggestion for you, who are undecided on which movie or series to watch 😊</p>
        </div>
        <Footer />
    </div>
  )
}

export default App
