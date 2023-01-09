import './pages.scss';

import { Widgets } from '../components';

export function Flights() {
    return (
        <main className="wrapper">
            <section className="hero flights">
                <h1>Book Flights</h1>
                <article>
                    <p>
                        Compare and book flights with ease. Discover your next
                        dream destination.
                    </p>
                </article>
            </section>
            <section className="widgets" id="widgets">
                <div className="flights">
                    <div className="flex">
                        <iframe title="Flights" src="way-away.html"></iframe>
                    </div>
                    <div className="flex">
                        <div className="date">Date Format: DD/MM/YYYY</div>
                        <iframe title="Flights" src="flights.html"></iframe>
                    </div>
                    <div className="caption">
                        <h3>Book your flight with confidence</h3>
                    </div>
                </div>
            </section>
            <Widgets />
        </main>
    );
}
