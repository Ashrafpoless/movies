import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

import './Nav.css';
const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
               <Link to='/'><img src={logo} alt="Logo" /></Link> 
            </div>
            <div className='navbar-links'>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/popular" className="nav-link">Popular</Link>
                <Link to="/top" className="nav-link">Top Rated</Link>
                <Link to="/show" className="nav-link">TV Show</Link>
                <Link to="/person" className="nav-link">Person</Link>
            </div>
            <div className='navbar-links'>
                <Link to="/favorite" className="nav-link">Favorites</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
        </nav>
    );
};

export default Nav;
