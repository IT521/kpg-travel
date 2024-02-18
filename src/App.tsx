import './App.scss';

import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Cars, Flights, Home, Hotels, Layout, NoMatch } from './pages';

export default function App() {
    return (
        <div className="main">
            <HelmetProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="flights" element={<Flights />} />
                        <Route path="stays" element={<Hotels />} />
                        <Route path="cars" element={<Cars />} />
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </HelmetProvider>
        </div>
    );
}
