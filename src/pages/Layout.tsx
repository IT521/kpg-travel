import { Link, Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <div>
            <nav className="primary-navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/flights">Flights</Link>
                    </li>
                    <li>
                        <Link to="/stays">Flights + Hotel</Link>
                    </li>
                    <li>
                        <Link to="/cars">Car Rentals</Link>
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
            </footer>
        </div>
    );
}
