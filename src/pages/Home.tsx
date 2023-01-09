import './pages.scss';

import { Link } from 'react-router-dom';

import cars from '../assets/photos/cars.jpg';
import cruiseShip from '../assets/photos/cruise-ship.jpg';
import departures from '../assets/photos/departures.jpg';
import resort from '../assets/photos/resort-pool.jpg';
import travelMap from '../assets/photos/travel-map.jpg';
import villa from '../assets/photos/villa.jpg';

export function Home() {
    return (
        <main className="wrapper">
            <section className="hero">
                <h1>Need travel?</h1>
                <article>
                    <p>
                        Discover Your Dream Destination with&nbsp;
                        <strong>KPG Travel</strong>&#8230; your Trusted Travel
                        Advisor for Affordable Flights, Hotels, Cruises, and
                        Rental Cars
                    </p>
                </article>
            </section>
            <section className="widgets" id="widgets">
                <ul>
                    <li>
                        <figure>
                            {/* Photo by Adam Gonzales at https://images.unsplash.com/photo-1588151626366-a2df693aa0a7 */}
                            <img src={cruiseShip} alt="cruise ship" />
                            <figcaption>
                                <h3>Cruises</h3>
                            </figcaption>
                        </figure>
                        <p>Book your Cruise</p>
                        <a href="https://terryfrancis.inteletravel.com/">
                            Cruises
                        </a>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Matthew Smith at https://images.unsplash.com/photo-1421789497144-f50500b5fcf0 */}
                            <img src={departures} alt="airline departures" />
                            <figcaption>
                                <h3>Flights</h3>
                            </figcaption>
                        </figure>
                        <p>Compare and book flights with ease</p>
                        <Link to="/flights">Flights</Link>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Sasha Kaunas at https://images.unsplash.com/photo-1584132967334-10e028bd69f7 */}
                            <img src={resort} alt="resort pool" />
                            <figcaption>
                                <h3>Hotels</h3>
                            </figcaption>
                        </figure>
                        <p>Book your flights and accommodation together</p>
                        <Link to="/stays">Hotels</Link>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Ciudad Maderas at https://images.unsplash.com/photo-1564501049412-61c2a3083791 */}
                            <img src={villa} alt="villa" />
                            <figcaption>
                                <h3>Villas</h3>
                            </figcaption>
                        </figure>
                        <p>Find a villa that you'll love</p>
                        <a href="https://terryfrancis.inteletravel.com/">
                            Villas
                        </a>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Carles Rabada at https://images.unsplash.com/photo-1570636802145-8cda1335fe54 */}
                            <img src={cars} alt="cars" />
                            <figcaption>
                                <h3>Car Rentals</h3>
                            </figcaption>
                        </figure>
                        <p>
                            Compare deals from the biggest car rental companies
                        </p>
                        <Link to="/cars">Car Rentals</Link>
                    </li>
                    <li>
                        <figure>
                            {/* Photo by Charlotte Noelle at https://images.unsplash.com/photo-1578894381163-e72c17f2d45f */}
                            <img src={travelMap} alt="travel map" />
                            <figcaption>
                                <h3>Insure It</h3>
                            </figcaption>
                        </figure>
                        <p>Protect your Trip</p>
                        <a href="https://terryfrancis.inteletravel.com/">
                            Insure It
                        </a>
                    </li>
                </ul>
            </section>
        </main>
    );
}
