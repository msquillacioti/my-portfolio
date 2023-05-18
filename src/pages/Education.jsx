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

function Education() {
  return (
    <div>
      <Header />
      <div class="background-section">
        <div>
          <h1 class="title">Education</h1>
        </div>
        <dl>{education.map(createEducationCard)}</dl>
      </div>
      <DownloadResume />
      <Footer />
    </div>
  );
}

export default Education;
