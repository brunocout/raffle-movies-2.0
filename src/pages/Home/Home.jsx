import React from 'react';
import Raffle from '../../components/Raffle/Raffle';
import './Home.css'


const Home = () => {

  return (
    <div className="home">
        <main className='main container'>
          <div className='home-message'>
              <h1>Raffle Movies: What Should i Watch?</h1>
              <p>Based on a list of movies from 2 to 10, I, <span>Raffle Movies</span> will raffle a suggestion for you, who are undecided on which movie to watch 😊</p>
          </div>
          <Raffle />
        </main>
    </div>
  )
}

export default Home
