import axios from 'axios';

export const getPopularMovies = async (endpoint, page) => {
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/${endpoint}?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`,
            {
                headers: {
                    "Authorization":
                        "eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTk0MGE0NTdjNWE1MjBmZmYzNTMyZGE3YWM1OWE0OSIsIm5iZiI6MTc0MjU3NTg5MS4zODEsInN1YiI6IjY3ZGQ5OTEzYzI4NDA0ZTYyOWY1NTE1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dCVIZG68shU9Dc_psXVaKspsDitzagsg1urAp4MvbiA.dCVIZG68shU9Dc_psXVaKspsDitzagsg1urAp4MvbiA",
                    accept: "application/json"
                }
            }
        );
        return res.data.results;
    } catch (error) {
        console.error(error);
    }
};

export const searchMovies = async (query) => {
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(query)}`,
            {
                headers: {
                    Authorization:
                        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTk0MGE0NTdjNWE1MjBmZmYzNTMyZGE3YWM1OWE0OSIsIm5iZiI6MTc0MjU3NTg5MS4zODEsInN1YiI6IjY3ZGQ5OTEzYzI4NDA0ZTYyOWY1NTE1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dCVIZG68shU9Dc_psXVaKspsDitzagsg1urAp4MvbiA',
                    accept: 'application/json'
                }
            }
        );

        return res.data.results;
    } catch (error) {
        console.error(error);
    }
};


export const searchShow = async (query) => {
    try {
        const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/search/tv?api_key=${import.meta.env.VITE_API_KEY}&query=${encodeURIComponent(query)}`,
            {
                headers: {
                    Authorization:
                        'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTk0MGE0NTdjNWE1MjBmZmYzNTMyZGE3YWM1OWE0OSIsIm5iZiI6MTc0MjU3NTg5MS4zODEsInN1YiI6IjY3ZGQ5OTEzYzI4NDA0ZTYyOWY1NTE1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dCVIZG68shU9Dc_psXVaKspsDitzagsg1urAp4MvbiA',
                    accept: 'application/json'
                }
            }
        );

        return res.data.results;
    } catch (error) {
        console.error(error);
    }
};