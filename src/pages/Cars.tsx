import './pages.scss';

export function Cars() {
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
                    <div className="flex">
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                    'https://tp.media/click?shmarker=399623&promo_id=4851&source_type=banner&type=click&campaign_id=172&trs=200561'
                                );
                            }}
                        >
                            <img
                                src="https://c172.travelpayouts.com/content?promo_id=4851&shmarker=399623&type=init&trs=200561"
                                width="120"
                                height="600"
                                alt="car rental coupons"
                            />
                        </button>
                    </div>
                    <div className="flex">
                        <iframe title="Car Rentals" src="cars.html"></iframe>
                    </div>
                    <div className="caption">
                        <h3>Reserve a Vehicle</h3>
                    </div>
                </div>
            </section>
        </main>
    );
}
