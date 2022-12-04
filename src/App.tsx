import './App.scss';

import { Route, Routes } from 'react-router-dom';

import { Flights, Home, Layout, NoMatch, Rentals } from './pages';

export default function App() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="cars" element={<Rentals />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}
