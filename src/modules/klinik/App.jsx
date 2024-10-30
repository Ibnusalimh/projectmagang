import { Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import MainContent from './components/MainContent';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<MainContent />} />
            </Route>
        </Routes>
    );
}

export default App;