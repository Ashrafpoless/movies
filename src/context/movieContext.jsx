import { createContext, useContext, useEffect, useState } from 'react';

const MovieContext = createContext({});
export const useMovieContext =() => useContext(MovieContext)
export const MovieProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(null)

    //  *************** storing in the localStorage *****************

    const [favorites, setFavorites] = useState(() => {
        // Load favorites from localStorage when initializing state
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    
    // Save to localStorage whenever favorites change
    useEffect(() => {
        if (favorites.length > 0) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }, [favorites]);

    // Function to add a movie to favorites (only if it's not already there)
    const addToFavorites = (movie) => {
        setFavorites(prev => {
            if (!prev.some(m => m.id === movie.id)) {
                const updatedFavorites = [...prev, movie];
                localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save immediately
                return updatedFavorites;
            }
            return prev;
        });
    };

    // Function to remove a movie from favorites
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => {
            const updatedFavorites = prev.filter(movie => movie.id !== movieId);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save immediately
            return updatedFavorites;
        });
    };

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    };
    //  *************** the End of storing in the localStorage *****************



    
     

    const value = {
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        favorites,
        page,
        setPage,
        numberOfPages,
        setNumberOfPages
      
    }
    return <MovieContext.Provider value={value}>
                {children}
            </MovieContext.Provider>;
};

export default MovieContext;
