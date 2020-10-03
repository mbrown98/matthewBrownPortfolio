import React from "react";
import "bulma/css/bulma.css";

const About = () => {
  return (
    <section class="hero is-primary" style={{ height: "100vh" }}>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-9">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <p class="title">About me</p>
                <p class="subtitle">Information</p>
              </article>
              <article class="tile is-child notification is-warning">
                <p class="title">Languages</p>
                <p class="subtitle">What I Know?</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Contact Me</p>
              <p class="subtitle">Contact Information</p>
              <div class="content"></div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Experience</p>
              <p class="subtitle">What I have done</p>
              <div class="content"></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
