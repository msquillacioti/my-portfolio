import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from "./pages/Home";
import Background from "./pages/Background";
import Portfolio from "./pages/Portfolio";
import {HashRouter, Routes, Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/background" element={<Background />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals(console.log);
