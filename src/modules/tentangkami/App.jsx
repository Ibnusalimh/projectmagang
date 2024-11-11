import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import About from './views/About';


function TentangKamiApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
      </Route>
    </Routes>
  );
}

export default TentangKamiApp;