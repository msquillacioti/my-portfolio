import React from "react";
import Resume from "../documents/Resume_Michael_Squillacioti.pdf";


const DownloadResume = () => {

  //Performs the action of opening a new preview/download page with my resume.
  function downloadClicked() {
    fetch(Resume).then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = "Resume_Michael_Squillacioti.pdf";
        alink.click();
      })
    })
  }
  return (
    //Actual button display
    <div class="resume-download-section">
      <button type="button" class="btn btn-dark btn-lg download-button resume-download-button" onClick={downloadClicked}>
        <i class="fas fa-file-download" /> Download Resume
      </button>
    </div>
  );
};

export default DownloadResume;
