import './pages.scss';

import { Widgets } from '../components';

export function Stays() {
    return (
        <main className="wrapper">
            <section className="hero stays">
                <h1>Book Flights and Stays</h1>
                <article>
                    <p>
                        Search for flights and stays. Book your flights and
                        accommodation.
                    </p>
                </article>
            </section>
            <section className="widgets stays" id="widgets">
                <div className="fly-away">
                    <iframe title="Flights" src="way-away.html"></iframe>
                    <div className="caption">
                        <h3>Book your Flight</h3>
                    </div>
                </div>
                <div className="points">
                    <a
                        href="https://tp.media/click?shmarker=399623&promo_id=4491&source_type=banner&type=click&campaign_id=155&trs=200561"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src="https://c155.travelpayouts.com/content?promo_id=4491&shmarker=399623&type=init&trs=200561"
                            width="160"
                            height="600"
                            alt="Hilton Points"
                        />
                    </a>
                </div>
                <div className="hotels">
                    <figure>
                        {/* Photo by Point3D Commercial Imaging Ltd on Unsplash */}
                        <img
                            src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658"
                            alt="hotel room"
                        />
                        <figcaption>
                            <h3>Exclusive Hotel Deals</h3>
                        </figcaption>
                    </figure>
                    <div className="caption">
                        <p>Get 30 to 50% off hotels with exclusive pricing</p>
                        <a
                            href="https://tp.media/click?shmarker=399623&promo_id=6535&source_type=link&type=click&campaign_id=344&trs=200561"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Find Accommodations
                        </a>
                    </div>
                </div>
            </section>
            <Widgets />
        </main>
    );
}
