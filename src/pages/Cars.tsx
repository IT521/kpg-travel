import './pages.scss';

import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Widgets } from '../components';

export function Cars() {
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
            <Helmet>
                <title>Car Rentals | KPG Travel</title>
                <meta
                    name="description"
                    content="KPG Travel | Car rentals for any kind of trip. Compare deals from popular car rental companies."
                />
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />
            </Helmet>
            <section className="hero cars preview">
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
            <Widgets />
        </main>
    );
}
