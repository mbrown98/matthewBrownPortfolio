import React from "react";
import "bulma/css/bulma.css";

const Header = () => {
  return (
    <nav
      class="navbar"
      role="navigation is-primary"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          Matthew Brown
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a
                title="GitHub Profile"
                href="#"
                target="_blank"
                href="https://github.com/mbrown98"
                rel="noopener noreferrer"
              >
                <i
                  class="fa fa-github"
                  style={{ fontSize: "30px", marginRight: "10px" }}
                ></i>
              </a>
              <a
                title="GitHub Profile"
                href="#"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/matthewbrown98/"
              >
                <i
                  class="fa fa-linkedin"
                  style={{ fontSize: "30px", marginRight: "10px" }}
                ></i>
              </a>

              <a target="_blank">
                <i
                  class="fa fa-file-text"
                  style={{ fontSize: "30px", marginRight: "10px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
