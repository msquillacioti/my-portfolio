import React from "react";
import Header from "../components/Header";
import DownloadResume from "../components/DownloadResume";
import Footer from "../components/Footer";



function Background() {
  return (
    <div>
      <Header />
      <div class="background-section">
        <div>
          <h1 class="title">Background</h1>
        </div>
        <h3>*Content directly from Background.jsx file.*</h3>
      </div>
      <DownloadResume />
      <Footer />
    </div>
  );
}

export default Background;
