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
                        Advisor providing competitive rates, destination events,
                        insider travel knowledge, and full service support.
                    </p>
                </article>
            </section>
            <section className="widgets" id="widgets">
                <ul>
                    <li>
                        <figure>
                            {/* Photo by Matthew Smith on Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1421789497144-f50500b5fcf0"
                                alt="Flights"
                            />
                            <figcaption>
                                <h3>Flights</h3>
                            </figcaption>
                        </figure>
                        <p>Compare and book flights with ease</p>
                        <Link to="/flights">Flights</Link>
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
                        <Link to="/stays">Flights + Hotel</Link>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Carles Rabada on Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1570636802145-8cda1335fe54"
                                alt="cars"
                            />
                            <figcaption>
                                <h3>Car Rentals</h3>
                            </figcaption>
                        </figure>
                        <p>
                            Compare deals from the biggest car rental companies
                        </p>
                        <Link to="/cars">Car Rentals</Link>
                    </li>
                </ul>
            </section>
        </main>
    );
}
