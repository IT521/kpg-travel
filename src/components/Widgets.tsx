import { FigureInterface } from './model';

const FIGURES: Array<FigureInterface> = [
    {
        id: 'italy-1000',
        src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963',
        alt: 'The Cliffs of Cinque Terre, Italy',
        credit: 'Photo by Jack Ward on Unsplash',
        caption: 'Travel Italy',
    },
    {
        id: 'uae-1000',
        src: 'https://images.unsplash.com/photo-1546412414-e1885259563a',
        alt: 'Burj Al Arab Jumeirah, Dubai, United Arab Emirates',
        credit: 'Photo by Darcey Beau on Unsplash',
        caption: 'Travel United Arab Emirates',
    },
    {
        id: 'hawaii-1000',
        src: 'https://images.unsplash.com/photo-1580671552517-3466b955de9e',
        alt: 'Kauai, Hawaii, USA',
        credit: 'Photo by Annie Hogan on Unsplash',
        caption: 'Travel Hawaii',
    },
    {
        id: 'greece-1000',
        src: 'https://images.pexels.com/photos/12766007/pexels-photo-12766007.jpeg',
        alt: 'White and Blue Dome Building in Thera, Greece',
        credit: 'Photo by Giannis Osep on Pexels',
        caption: 'Travel Greece',
    },
    {
        id: 'portugal-1000',
        src: 'https://images.unsplash.com/photo-1562195168-c82fea0f0953',
        alt: 'Pena Palace, Sintra, Portugal',
        credit: 'Photo by Julia Solonina on Unsplash',
        caption: 'Travel Portugal',
    },
    {
        id: 'france-1000',
        src: 'https://images.unsplash.com/photo-1568684333868-3120370d2572',
        alt: 'Eiffel Tower in Paris, France',
        credit: 'Photo by Alex Azabache on Unsplash',
        caption: 'Travel France',
    },
    {
        id: 'czechia-1000',
        src: 'https://images.unsplash.com/photo-1568209166532-cfab434e43a3',
        alt: 'Cesky Krumlov, Czech Republic',
        credit: 'Photo by Ivan Theodoulou on Unsplash',
        caption: 'Travel Czechia',
    },
    {
        id: 'england-1000',
        src: 'https://images.unsplash.com/photo-1659337599008-bc2aaf0e1643',
        alt: 'Durham, England, UK',
        credit: 'Photo by K. Mitch Hodge on Unsplash',
        caption: 'Travel England',
    },
    {
        id: 'spain-1000',
        src: 'https://images.unsplash.com/photo-1561991928-2bfcff536e0e',
        alt: 'Cala dos Moro in Mallorca, Spain, Mallorca',
        credit: 'Photo by Reiseuhu.de on Unsplash',
        caption: 'Travel Spain',
    },
    {
        id: 'australia-1000',
        src: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
        alt: 'Sydney, Australia',
        credit: 'Photo by Dan Freeman on Unsplash',
        caption: 'Travel Australia',
    },
    {
        id: 'caribbean-1000',
        src: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7',
        alt: 'W Maldives, Himandhoo, Maldives',
        credit: 'Photo by Pedro Monteiro on Unsplash',
        caption: 'Travel the Caribbean',
    },
];

export function Widgets() {
    const indices: Array<number> = [];
    while (indices.length < 3) {
        let index = getRandomIndex(0, FIGURES.length);
        if (!indices.includes(index)) {
            indices.push(index);
        }
    }

    return indices.length === 3 ? (
        <section className="widgets" id="travel-widgets">
            <ul>
                {indices.map((index) => {
                    return (
                        <li key={FIGURES[index].id}>
                            <figure>
                                {/* Photo on Unsplash */}
                                <img
                                    src={FIGURES[index].src}
                                    alt={FIGURES[index].alt}
                                ></img>
                                <figcaption className="tooltip">
                                    <h3>{FIGURES[index].caption}</h3>
                                    <span className="tooltip-text">
                                        {FIGURES[index].alt}
                                    </span>
                                </figcaption>
                            </figure>
                        </li>
                    );
                })}
            </ul>
        </section>
    ) : null;
}

// The maximum is exclusive and the minimum is inclusive
const getRandomIndex = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
