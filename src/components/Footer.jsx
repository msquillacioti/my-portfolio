import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div class="mid-coloring">
        <div>
          <a class="btn social-icons" href="https://www.linkedin.com/in/michael-c-squillacioti/"><i class="fab fa-linkedin"></i></a>
          <a class="btn social-icons" href="https://github.com/msquillacioti"><i class="fab fa-github"></i></a>
          <a class="btn social-icons" href="mailto:m.squillacioti16@gmail.com"><i class="fas fa-envelope"></i></a>
        </div>
        <p>Copyright ⓒ {year}</p>
      </div>
    </footer>
  );
}

export default Footer;
