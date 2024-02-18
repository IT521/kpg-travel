import './pages.scss';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { getPreviewImage, ImagePreview } from '../components';
import { HOME_IMAGES } from '../model';

export function Home() {
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
                <title>KPG Travel</title>
                <meta
                    name="description"
                    content="Use KPG Travel for your travel needs. Build your ideal trip on any budget with huge savings on flights, cruises, car rentals, hotels, villas, and attractions."
                />
                <meta
                    name="keywords"
                    content="cars, cheap flights, cheap hotels near me, flights, hotels, hotels near me, motels, motels near me, accommodation, airfare, airline tickets, airlines, all inclusive resorts, beach, booking, cabin rentals, cabins, carnivals, cheap airline tickets, cheap cars, cheap hotels, cheap motels, cheap tickets, cruise ship, cruises, destinations, dream hotel, flight booking, flight ticket, fly, hostel, hotels near me, inn, lodging, plane tickets, resorts, resorts near me, tourist places, travel, travel agency, vacations, travel insurance"
                />
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large"
                />
            </Helmet>
            <section className="hero preview">
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
                    {HOME_IMAGES.map((image) => {
                        const href: string = image.href || '';

                        return (
                            <li key={image.id}>
                                <figure>
                                    <ImagePreview
                                        preview={getPreviewImage(image.id)}
                                        src={image.src}
                                        alt={image.alt}
                                    ></ImagePreview>
                                    <figcaption>
                                        <h3>{image.caption}</h3>
                                    </figcaption>
                                </figure>
                                <p>{image.prompt}</p>
                                {image.isExternal ? (
                                    <a href={href}>{image.caption}</a>
                                ) : (
                                    <Link to={href}>{image.caption}</Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}
