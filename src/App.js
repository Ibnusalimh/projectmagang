import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BiayaApp from './modules/biaya/App';
import FiturApp from './modules/fitur/App';
import HubungiKamiApp from './modules/hubungikami/App';
import KlinikApp from './modules/klinik/App';
import TentangKamiApp from './modules/tentangkami/App';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/biaya/" element={<BiayaApp />} />
        <Route path="/fitur/" element={<FiturApp />} />
        <Route path="/hubungikami/" element={<HubungiKamiApp />} />
        <Route path="/klinik/" element={<KlinikApp />} />
        <Route path="/" element={<TentangKamiApp />} />
      </Routes>
    </Router>
  );
}

export default App;
