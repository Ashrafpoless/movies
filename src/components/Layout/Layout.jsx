import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Nav />
            <main className="main-content">
            <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
