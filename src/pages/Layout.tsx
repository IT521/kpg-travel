import { Link, Outlet } from 'react-router-dom';

import { PinterestLogo } from '../components';

export function Layout() {
    return (
        <div>
            <nav className="primary-navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="https://terryfrancis.inteletravel.com/">
                            Cruises
                        </a>
                    </li>
                    <li>
                        <Link to="/flights">Flights</Link>
                    </li>
                    <li>
                        <Link to="/stays">Flights + Hotel</Link>
                    </li>
                    <li>
                        <a href="https://terryfrancis.inteletravel.com/">
                            Villas
                        </a>
                    </li>
                    <li>
                        <Link to="/cars">Car Rentals</Link>
                    </li>
                    <li>
                        <a href="https://terryfrancis.inteletravel.com/">
                            Insure It
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="main-content">
                <Outlet />
            </div>

            <footer>
                <p>
                    &copy; {new Date().getFullYear()} KPG Travel. All rights
                    reserved.
                </p>
                <div className="social">
                    <PinterestLogo />
                </div>
            </footer>
        </div>
    );
}
