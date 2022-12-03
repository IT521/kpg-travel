import './App.scss';

import { Route, Routes } from 'react-router-dom';

import { Home, Layout, NoMatch } from './pages';

export default function App() {
    return (
        <div className="main">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}
