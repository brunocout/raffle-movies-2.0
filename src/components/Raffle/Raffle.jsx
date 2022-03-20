import React, { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import requestApi from '../../api/requestApi';
import Button from '../Button/Button';
import MovieSprites from '../Movie/MovieSprites/MovieSprites'
import RaffledMovie from '../Movie/RaffledMovie/RaffledMovie';
import { API_IMG } from '../../api/tmdb'
import './Raffle.css'

const Raffle = () => {

    const [dataMovie, setDataMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [nameMovie, setNameMovie] = useState([])
    const [raffledData, setRaffledData] = useState([])

    const handleOnClick = () => {
        requestApi(searchTerm).then(value => {
            setDataMovie([...dataMovie, value.results[0]])
        })
        setNameMovie([...nameMovie, searchTerm])
        setSearchTerm('')
    }

    const handleRaffledMovie = () => {
        chooseRaffledMovie()
    }

    const chooseRaffledMovie = () => {
        const luckyNumber = Math.floor(Math.random() * (nameMovie.length))
        requestApi(nameMovie[luckyNumber]).then(value => {
            setRaffledData(value.results[0])
        })
    }

    console.log(raffledData)

    return (
        <div className="raffle-content">
            <div className='home-message'>
                    <h1>Raffle Movies: What Should i Watch?</h1>
                    <p>Based on a list of movies from 2 to 10, I, <span>Raffle Movies</span> will draw a suggestion for you, who are undecided on which movie or series to watch 😊</p>
                </div> 
            <div className="raffle">
                <div className="raffle-container">
                    <h1>Choose the Movies</h1>
                    <p>Add movies or tv shows</p>
                    <div className='input-container'>
                        <Button component='button' className='add-button' onClick={handleOnClick}><RiAddFill /></Button>
                        <input type="text" name='search' placeholder='eg. Spider Man' onChange={e => (setSearchTerm(e.target.value))} value={searchTerm}/>
                    </div>
                    <Button component='button' className='raffle-button' onClick={handleRaffledMovie}>Raffle now</Button>
                </div>
                <div className="bar"></div>
                {raffledData.length != 0 ? <RaffledMovie data={raffledData} img_url={API_IMG} /> : dataMovie.length != 0 ? <div className="movies-container">
                    {dataMovie.map(item => <MovieSprites data={API_IMG + item.poster_path}/>)}
                </div> : <p>Add movies to the list... Lets draw. 😉</p>
                }
            </div>
        </div>
     );
}
 
export default Raffle;