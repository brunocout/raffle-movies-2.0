import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Raffle from '../../components/Raffle/Raffle';
import './Home.css'


const Home = () => {

  return (
    <div className="Home">
        <Navbar />
        <main className='main container'>
          <div className='home-banner'>
            <img src="../assets/images/banner.png"/>
          </div>
          <Raffle />
        </main>
        <Footer />
    </div>
  )
}

export default Home
