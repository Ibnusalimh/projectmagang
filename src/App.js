import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import TentangKamiApp from './modules/tentangkami/App';
import FiturApp from './modules/fitur/App';
import BiayaApp from './modules/biaya/App';
import KlinikApp from './modules/klinik/App';
import HubungiKamiApp from './modules/hubungikami/App';


const App = () => {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="*" element={<TentangKamiApp />} />
            <Route path="/fitur/*" element={<FiturApp />} />
            <Route path="/biaya/*" element={<BiayaApp />} />
            <Route path="/klinik/*" element={<KlinikApp />} />
            <Route path="/hubungikami/*" element={<HubungiKamiApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
