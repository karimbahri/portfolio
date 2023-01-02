import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Services() {
  return (
    <div className="services" id="services">
      <h1 className="section_header">WHAT I DO</h1>
      <AnimationOnScroll animateIn="animate__fadeIn" offset="300">
        <p className="services__detail">
          A custom web application that meets your needs. <br />I use ReactJS as
          frontend technology, nodejs for backend and cloud base databases for
          data storage such as MongoAtlas.
          <br />
          I will put all my knowledge and my experience to produce the result
          that fulfills your satisfaction.
          <br />
          In nutshell i will offer you the chance to transform your ideas into
          reality.
          <br />
          So don't hesitate to <a href="#contact">contact me</a> if you need
          help.
        </p>
      </AnimationOnScroll>
    </div>
  );
}
