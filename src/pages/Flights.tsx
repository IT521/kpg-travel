import './pages.scss';

import { useEffect } from 'react';

import { Widgets } from '../components';

export function Flights() {
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
            <section className="hero flights preview">
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
                    <div className="flex fixed">
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
