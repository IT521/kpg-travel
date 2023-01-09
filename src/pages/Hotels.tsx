import './pages.scss';

import hotelRoom from '../assets/photos/hotel-room.jpg';
import { Widgets } from '../components';

export function Hotels() {
    return (
        <main className="wrapper">
            <section className="hero stays">
                <h1>Book Accommodations</h1>
                <article>
                    <p>Search and book your accommodations.</p>
                </article>
            </section>
            <section className="widgets stays" id="widgets">
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
                        {/* Photo by Point3D Commercial Imaging Ltd at https://images.unsplash.com/photo-1631049552057-403cdb8f0658 */}
                        <img src={hotelRoom} alt="hotel room" />
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
