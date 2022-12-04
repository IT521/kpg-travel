import './pages.scss';

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
            <section className="widgets flex" id="widgets">
                <div className="date">Date Format: DD/MM/YYYY</div>
                <div className="flights">
                    <iframe
                        title="Flights"
                        src="flights.html"
                        scrolling="no"
                    ></iframe>
                    <div className="caption">
                        <h3>Book your flight with confidence</h3>
                    </div>
                </div>
            </section>
        </main>
    );
}
