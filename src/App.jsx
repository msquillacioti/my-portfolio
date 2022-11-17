import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Background from "./pages/Background";
import Portfolio from "./pages/Portfolio";

import {HashRouter, Routes, Route} from "react-router-dom";

// BrowserRouter is not supported by gh-pages. Might need to use HashRouter instead, although that doesn't work currently.

function App() {
  return (
    <div>
      <h1> App.jsx is being used. </h1>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/background" element={<Background />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </HashRouter>
    </div>
  );
};

export default App;
