import React from "react";
import Tilt from "react-parallax-tilt";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Whoami() {
  return (
    <div className="whoami" id="whoami">
      <AnimationOnScroll
        className="whoami__info-animation"
        animateIn="animate__rotateInDownLeft"
        offset="300"
      >
        <Tilt
          className="whoami__info"
          glareEnable={true}
          glareMaxOpacity={0.4}
          tiltMaxAngleX={15}
          tiltMaxAngleY={16}
          glareColor="white"
          glarePosition="all"
          glareBorderRadius="10px"
        >
          <img
            src={"/assets/images/blank-profile-photo.jpeg"}
            alt="personal-pic"
            className="personal-photo"
          />
          <ul className="whoami__info-card">
            <li className="name">
              <span className="bold">Name : </span>Karim Bahri
            </li>
            <li className="education">
              <span className="bold">Education : </span>
              <div className="education__info">
                <div className="education__info-wrapper">
                  <img
                    src={"/assets/images/hbnb.png"}
                    alt="hbnb_logo"
                    className="hbnb_logo"
                    width="35px"
                    height="35px"
                  />
                  Holberton School
                </div>
                <span className="date">2020 - 2022.</span>
              </div>
            </li>
            <li className="skills">
              <span className="bold">Skills : </span>
              <ul className="skiils__list">
                <li>Front-end.</li>
                <li>Back-end.</li>
                <li>APIs.</li>
                <li>DataBases.</li>
                <li>Containers.</li>
              </ul>
            </li>
          </ul>
        </Tilt>
      </AnimationOnScroll>
      <p className="whami__Detail__Description">
        <AnimationOnScroll
          // animateIn="animate__fadeIn"
          animateIn="animate__fadeIn"
          offset="400"
        >
          Full-Stack developer with ability to learn and collaborate in rapidly
          changing environments.
          <br />
          Hard-working with a flair for creating elegant solutions in the least
          amount of time.
          <br />
          Passionate about developing scalable web applications and working
          across the full stack.
        </AnimationOnScroll>
        {/* Full-Stack developer with ability to learn and collaborate in rapidly
        changing environments.
        <br />
        Hard-working with a flair for creating elegant solutions in the least
        amount of time.
        <br />
        Passionate about developing scalable web applications and working across
        the full stack. */}
      </p>
    </div>
  );
}
