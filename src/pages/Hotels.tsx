import './pages.scss';

import { useEffect } from 'react';

import { getPreviewImage, ImagePreview, Widgets } from '../components';

export function Hotels() {
    useEffect(() => {
        const onPageLoad = () => {
            const preview = window.document.querySelector(
                'section.hero.preview'
            );
            if (preview) {
                preview.classList.remove('preview');
            }
        };

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);

    return (
        <main className="wrapper">
            <section className="hero hotels preview">
                <h1>Book Accommodations</h1>
                <article>
                    <p>Find and book your accommodations.</p>
                </article>
            </section>
            <section className="widgets hotels" id="widgets">
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
                <div className="rooms">
                    <figure>
                        {/* Photo by Point3D Commercial Imaging Ltd on Unsplash */}
                        <ImagePreview
                            preview={getPreviewImage('hotels-1000')}
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
