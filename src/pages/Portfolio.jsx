import React from "react";
import Header from "../components/Header";
import DownloadResume from "../components/DownloadResume";
import Footer from "../components/Footer";



function Portfolio() {
  return (
    <div>
      <Header />
      <div class="background-section">
        <div>
          <h1 class="title">Portfolio</h1>
        </div>
        <h3>*Content directly from Portfolio.jsx file.*</h3>
      </div>
      <DownloadResume />
      <Footer />
    </div>
  );
}

export default Portfolio;
