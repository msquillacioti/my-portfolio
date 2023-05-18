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
        <h3></h3>
        <h3>* Portfolio Coming Soon *</h3>
        <h3></h3>
        <img src={"http://www.clker.com/cliparts/1/c/2/a/11970890841431512955Milkman666_Cone.svg.svg.hi.png"} alt={"Traffic Cone"} />
      </div>
      <DownloadResume />
      <Footer />
    </div>
  );
}

export default Portfolio;
