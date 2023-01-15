import australia1000 from '../assets/australia-1000.jpg';
import caribbean1000 from '../assets/caribbean-1000.jpg';
import cars1000 from '../assets/cars-1000.jpg';
import cruises1000 from '../assets/cruises-1000.jpg';
import czechia1000 from '../assets/czechia-1000.jpg';
import england1000 from '../assets/england-1000.jpg';
import flights1000 from '../assets/flights-1000.jpg';
import france1000 from '../assets/france-1000.jpg';
import greece1000 from '../assets/greece-1000.jpg';
import hawaii1000 from '../assets/hawaii-1000.jpg';
import hotels1000 from '../assets/hotels-1000.jpg';
import hotels1100 from '../assets/hotels-1100.jpg';
import insure1000 from '../assets/insure-1000.jpg';
import italy1000 from '../assets/italy-1000.jpg';
import portugal1000 from '../assets/portugal-1000.jpg';
import spain1000 from '../assets/spain-1000.jpg';
import uae1000 from '../assets/uae-1000.jpg';
import villas1000 from '../assets/villas-1000.jpg';

const images: { [key: string]: string } = {
    italy1000,
    uae1000,
    hawaii1000,
    greece1000,
    portugal1000,
    france1000,
    czechia1000,
    england1000,
    spain1000,
    australia1000,
    caribbean1000,
    hotels1000,
    hotels1100,
    cruises1000,
    flights1000,
    insure1000,
    cars1000,
    villas1000,
};

export function getPreviewImage(key: string): string {
    return images[key.replace('-', '')];
}
