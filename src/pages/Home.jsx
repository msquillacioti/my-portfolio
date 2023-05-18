import React from "react";
import Header from "../components/Header";
import DownloadResume from "../components/DownloadResume";
import Footer from "../components/Footer";


function Home() {
  return (
    <div>
      <Header />
      <div class="home-section">
        <div>
          <h1 class="title">Welcome!</h1>
          <h2 class="subtitle">My name is Michael Squillacioti.</h2>

        </div>
        <img className="profile-picture" src={require("../images/profilepicture.png")} alt={"Profile Picture"} />
        <h3> Programmer | Mechanical Engineer | MBA Graduate </h3>
      </div>
      <DownloadResume />
      <Footer />
    </div>
  );
}

export default Home;
