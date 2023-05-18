import React from "react";
import Header from "../components/Header";
import DownloadResume from "../components/DownloadResume";
import Footer from "../components/Footer";

import WorkCard from "../components/WorkCard.jsx";
import workexperience from "../components/workexperience.js";

function createWorkCard(workEntry) {
  return (
    <WorkCard
      companyName={workEntry.companyName}
      img={workEntry.img}
      position={workEntry.position}
      time={workEntry.time}
      description={workEntry.description}
    />
  );
}

function WorkExperience() {
  return (
    <div>
      <Header />
      <div class="background-section">
        <div>
          <h1 class="title">Work Experience</h1>
        </div>
        <dl>{workexperience.map(createWorkCard)}</dl>
      </div>
      <DownloadResume />
      <Footer />
    </div>
  );
}

export default WorkExperience;
