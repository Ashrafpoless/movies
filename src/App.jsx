
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MovieProvider } from './context/movieContext';
// components & pages
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Popular from './pages/Popular/Popular';
import TopRated from './pages/TopRated/TopRated';
import TVShow from './pages/TVShow/TVShow';
import Person from './pages/Person/Person';
import Favorites from './pages/Favorites/Favorites';
import Missing from './components/Missing/Missing';

import './App.css';

function App() {
    const Router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <Missing />,
            children: [
                { index: true, element: <Home /> },
                { path: 'favorite', element: <Favorites /> },
                { path: 'popular', element: <Popular /> },
                { path: 'top', element: <TopRated /> },
                { path: 'show', element: <TVShow /> },
                { path: 'person', element: <Person /> },
                { path: 'about', element: <About /> }
            ]
        }
    ]);

    return (
        <>
            <MovieProvider>
              
                <RouterProvider router={Router} />
            </MovieProvider>
        </>
    );
}

export default App;
