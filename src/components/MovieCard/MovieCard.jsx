import { useMovieContext } from '../../context/movieContext';
import './MovieCard.css';
const MovieCard = ({ movie }) => {
    const {addToFavorites, removeFromFavorites, isFavorite} = useMovieContext();
    const favorite = isFavorite(movie.id)

    const onFavoriteClick = (e) => {
        e.preventDefault();
        if(favorite) removeFromFavorites(movie.id) 
        else addToFavorites(movie);
    };
    return (
        <div className="movie-card">
            <div className="movie-poster">

                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || movie.profile_path}`}
                    alt={movie.title || movie.name}
                />
                <div className="movie-overlay">
                    <button 
                        className={`favorite-btn ${favorite ? "active" : ""}`} 
                        onClick={(e) =>onFavoriteClick(e)}
                    >
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title || movie.name}</h3>
                <p>{movie.release_date?.split("-")[0] || movie.known_for_department || movie.first_air_date}</p>
            </div>
            
        </div>
    );
};

export default MovieCard;
