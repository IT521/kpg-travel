import './pages.scss';

export function Rentals() {
    return (
        <main className="wrapper">
            <section className="hero cars">
                <h1>Rent Cars</h1>
                <article>
                    <p>
                        Car rentals for any kind of trip. Compare deals from
                        popular car rental companies.
                    </p>
                </article>
            </section>
            <section className="widgets" id="widgets">
                <div className="cars">
                    <iframe title="Car Rentals" src="cars.html"></iframe>
                    <div className="caption">
                        <h3>Reserve a Vehicle</h3>
                    </div>
                </div>
            </section>
        </main>
    );
}
