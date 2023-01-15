import './pages.scss';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
