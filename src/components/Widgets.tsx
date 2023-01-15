import { WIDGET_IMAGES } from '../model';
import { getPreviewImage, ImagePreview } from './';

export function Widgets() {
    const indices: Array<number> = [];
    while (indices.length < 3) {
        let index = getRandomIndex(0, WIDGET_IMAGES.length);
        if (!indices.includes(index)) {
            indices.push(index);
        }
    }

    return indices.length === 3 ? (
        <section className="widgets" id="travel-widgets">
            <ul>
                {indices.map((index) => {
                    return (
                        <li key={WIDGET_IMAGES[index].id}>
                            <figure>
                                <ImagePreview
                                    preview={getPreviewImage(
                                        WIDGET_IMAGES[index].id
                                    )}
                                    src={WIDGET_IMAGES[index].src}
                                    alt={WIDGET_IMAGES[index].alt}
                                ></ImagePreview>
                                <figcaption className="tooltip">
                                    <h3>{WIDGET_IMAGES[index].caption}</h3>
                                    <span className="tooltip-text">
                                        {WIDGET_IMAGES[index].alt}
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
