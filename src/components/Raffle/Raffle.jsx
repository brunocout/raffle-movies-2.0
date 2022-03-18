import { RiAddFill } from 'react-icons/ri';
import Button from '../Button/Button';
import './Raffle.css'

const Raffle = () => {
    return ( 
        <div className="raffle">
            <div className="raffle-container">
                <h1>Choose the movies</h1>
                <p>Add movies or tv shows</p>
                <div className='input-container'>
                    <Button component='button' className='add-button'><RiAddFill /></Button>
                    <input type="text" name='search' placeholder='eg. Spider Man' />
                </div>
                <Button component='button' className='raffle-button'>Raffle now</Button>
            </div>
            <div className="movies-sprites">
                Let me raffle a movie 😉 
            </div>
        </div>
     );
}
 
export default Raffle;