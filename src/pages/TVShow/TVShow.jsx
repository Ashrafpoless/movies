import { useEffect, useState } from 'react';
import { getPopularMovies, searchShow } from '../../Api/moviesApi';

import MovieCard from '../../components/MovieCard/MovieCard';
import Loading from '../../components/Loading/Loading';


import './TVShow.css';

const TVShow = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(null)
    

    //const movies = getPopularMovies();

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies('tv/popular', page);
                setMovies(popularMovies);
                setNumberOfPages(popularMovies.total_pages);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, [page]);

    const handleSearch = async (e) => {
        e.preventDefault();
        if(!search.trim()) return;
        if(loading) return;
        setLoading(true);
        try {
            const searchResult = await searchShow(search);
            setMovies(searchResult);
            setError(null);
        } catch (err) {
          console.log(err.message)
          setError(err.message);

        }finally{
          setLoading(false);
        }
    };

   // **************** Pagination ****************
    
   const prePage = ()=>{
    if(page !== 1){
        setPage(page-1)
    }else{
        return
    }
};

const nextPage = () => {
    if(page !== 100){
        setPage(page+1)
    }else{
        return
    }
};


// ****************The End of Pagination ****************

    return (
        <div className="home">
           <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            className="search-input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search for movies..."
                        />
                        <button type="submit" className="search-button">
                            Search
                        </button>
            </form>
            {error && <div  className="error-message">Error: {error}</div>}
            {loading ? (
                <Loading/>
            ) : (
                    <div className="movies-grid">
                        {movies.map(
                            (movie) =>
                                movie && (movie.title || movie.name) && (movie.title || movie.name) 
                                    .toLowerCase()
                                    .includes(search.toLowerCase()) && 
                                    <MovieCard key={movie.id} movie={movie} />
                        )}
                    </div>
                
            )}

            <div className="pagination">
            <nav>
                <ul >
                    {/* Previous button */}
                    <li>
                        <button onClick={prePage} disabled={page === 1}>Prev</button>
                    </li>
                    
                    {/* Next button */}
                    <li>
                        <button onClick={nextPage} disabled={page === numberOfPages}>Next</button>
                    </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TVShow;
{/*
            <div>
                
                            [...Array(numberOfPages).keys()].map((n, i )=> (
                                <li key={i}>
                                    <a href="#" onClick={()=> changeCPage(i+1)}>{i+1}</a>
                                </li>
                            ))
                        
                        
            </div>
        */}