import React from 'react';
import Raffle from '../../components/Raffle/Raffle';
import './Home.css'


const Home = () => {

  return (
    <div className="home">
        <main className='main container'>
          <div className='home-banner'>
            <img src="../assets/images/banner.png"/>
          </div>
          <Raffle />
        </main>
    </div>
  )
}

export default Home
