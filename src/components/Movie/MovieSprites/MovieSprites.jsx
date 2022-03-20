import './MovieSprites.css'

const MovieSprite = ({ data }) => {

    return (
        <div className="movies-sprites">
            <img src={data} alt="err" />
        </div>
    );
}
 
export default MovieSprite;