import React from "react";
import Header from "../components/Header";
import DownloadResume from "../components/DownloadResume";
import Footer from "../components/Footer";

import EducationCard from "../components/EducationCard.jsx";
import education from "../components/education.js";

function createEducationCard(educationEntry) {
  return (
    <EducationCard
      schoolName={educationEntry.schoolName}
      img={educationEntry.img}
      time={educationEntry.time}
      degree={educationEntry.degree}
    />
  );
}

function Background() {
  return (
    <div>
      <Header />
      <div class="background-section">
        <div>
          <h1 class="title">Background</h1>
        </div>
        <h3>*Content directly from Background.jsx file.*</h3>
        <dl>{education.map(createEducationCard)}</dl>
      </div>
      <DownloadResume />
      <Footer />
    </div>
  );
}

export default Background;
