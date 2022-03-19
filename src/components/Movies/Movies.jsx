import './Movies.css'

const Movies = ({ data }) => {

    return ( 
        <div className="movies-container">
            <img src={data} alt="err" />
        </div> 
    );
}
 
export default Movies;