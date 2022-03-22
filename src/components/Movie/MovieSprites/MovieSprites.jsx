import './MovieSprites.css'

const MovieSprite = ({ data }) => {

    return (
        <div className="movies-sprites">
            <img src={data} />
        </div>
    );
}
 
export default MovieSprite;