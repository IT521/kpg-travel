import './pages.scss';

import { Link } from 'react-router-dom';

export function Home() {
    return (
        <main className="wrapper">
            <section className="hero">
                <h1>Need travel?</h1>
                <article>
                    <p>
                        <strong>KPG Travel</strong> is an Independent Travel
                        Agent providing competitive rates, destination events,
                        insider travel knowledge, and full service support.
                    </p>
                </article>
            </section>
            <section className="widgets" id="widgets">
                <ul>
                    <li>
                        <figure>
                            {/* Photo by Stefan Fluck on Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1581012771300-224937651c42"
                                alt="Airplane"
                            />
                            <figcaption>
                                <h3>Flights</h3>
                            </figcaption>
                        </figure>
                        <p>Compare and book flights with ease</p>
                        <Link to="/home">Flights</Link>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Sasha Kaunas on Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7"
                                alt="beach"
                            />
                            <figcaption>
                                <h3>Flights + Hotel</h3>
                            </figcaption>
                        </figure>
                        <p>Book your flights and accommodation together</p>
                        <Link to="/home">Flights + Hotel</Link>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Ivana Cajina on Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1543465077-db45d34b88a5"
                                alt="cars"
                            />
                            <figcaption>
                                <h3>Car Rentals</h3>
                            </figcaption>
                        </figure>
                        <p>
                            Compare deals from the biggest car rental companies
                        </p>
                        <Link to="/home">Car Rentals</Link>
                    </li>
                </ul>
            </section>
        </main>
    );
}
