import React from "react";
import Education from "../pages/Education.jsx";
import WorkExperience from "../pages/WorkExperience.jsx";
import Portfolio from "../pages/Portfolio.jsx";

import { Link } from "react-router-dom";


function Header() {
  return (
    <header>
    <div class="container-fluid mid-coloring">

      <nav class="navbar navbar-expand-lg navbar-dark">
        <Link class="navbar-brand" to="/">About Me</Link>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link"  to="/education">Education</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"  to="/workexperience">Work Experience</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </header>
  );
}

export default Header;
