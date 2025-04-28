import { useEffect, useState } from 'react';
import { getPopularMovies, searchMovies } from '../../Api/moviesApi';

import MovieCard from '../../components/MovieCard/MovieCard';
import Loading from '../../components/Loading/Loading';
import Search from '../../components/Search/Search';

import './Popular.css';

const Popular = () => {
        const [movies, setMovies] = useState([]);
        const [search, setSearch] = useState('');
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(true);
        const [page, setPage] = useState(1);
        const [numberOfPages, setNumberOfPages] = useState(null)
    
    
        useEffect(() => {
            const loadPopularMovies = async () => {
                try {
                    const popularMovies = await getPopularMovies('movie/popular', page);
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
               
          <Search setMovies={setMovies} loading={loading} setLoading={setLoading} setError={setError} search={search} setSearch={setSearch} searchFun={searchMovies}/>
               

                {error && <div  className="error-message">Error: {error}</div>}
                {loading ? (
                    <Loading/>
                ) : (
                        <div className="movies-grid">
                            {movies.map(
                                (movie) =>
                                    movie.title
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
    

export default Popular