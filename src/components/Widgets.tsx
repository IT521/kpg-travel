import { FIGURES } from './model';

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
