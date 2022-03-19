import React, { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import Button from '../Button/Button';
import Movies from '../Movies/Movies'
import { API_BASE, API_KEY, API_LANGUAGE, API_IMG } from '../../services/api/tmdb'
import './Raffle.css'

const Raffle = () => {

    const [dataMovie, setDataMovie] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [nameMovie, setNameMovie] = useState('')

    const handleOnclick = () => {
       requestMovie(searchTerm)
       setNameMovie([...nameMovie, searchTerm])
       setSearchTerm('')
    }

    const requestMovie = async (movie) => {
        fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${movie}`).then(res => res.json()).then(data => {
            setDataMovie([...dataMovie, data.results[0]])
        }).catch(err => {
            console.log(err)
        })
    }

    return ( 
        <div className="raffle">
            <div className="raffle-container">
                <h1>Choose the movies</h1>
                <p>Add movies or tv shows</p>
                <div className='input-container'>
                    <Button component='button' className='add-button' onClick={handleOnclick}><RiAddFill /></Button>
                    <input type="text" name='search' placeholder='eg. Spider Man' onChange={e => (setSearchTerm(e.target.value))} value={searchTerm}/>
                </div>
                <Button component='button' className='raffle-button'>Raffle now</Button>
            </div>
            <div className="bar"></div>
            <div className="movies-sprites">
                {dataMovie.map(item => <Movies data={API_IMG + item.poster_path}/>)}
            </div>
        </div>
     );
}
 
export default Raffle;