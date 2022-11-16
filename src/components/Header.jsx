import React from "react";
import Background from "../pages/Background.jsx";
import Portfolio from "../pages/Portfolio.jsx";



function Header() {
  return (
    <header>
    <div class="container-fluid mid-coloring">

      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="/">About Me</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/Background">Background</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Portfolio">Portfolio</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    </header>
  );
}

export default Header;
