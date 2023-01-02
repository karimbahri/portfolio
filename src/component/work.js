import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
const workData = require("../data").data;

export default function Work() {
  return (
    <div className="work" id="work">
      <h1 className="section_header">WORK</h1>

      <div className="work__list">
        {workData.map((workItem) => {
          return (
            <AnimationOnScroll animateIn="animate__fadeIn">
              <div className="work__item" key={workItem.id}>
                <img
                  src={workItem.project_thumbnail}
                  alt="project-thumbnail"
                  className={`thumb thumb-${workItem.id % 2 ? "odd" : "even"}`}
                />
                <h1
                  className={`work__item__title work__item__title-${
                    workItem.id % 2 ? "odd" : "even"
                  }`}
                >
                  {workItem.work__item__title}
                </h1>
                <div
                  className={`work__item__detail work__item__detail-${
                    workItem.id % 2 ? "odd" : "even"
                  }`}
                >
                  <p className="work__item__description">
                    {workItem.work__item__description}
                    <br />
                    <span className="bold">technology used: </span>
                    <ul className="tech_used">
                      {workItem.tech_used.map((element) => {
                        return (
                          <li key={element.id}>
                            <span className="bold">{element.field}: </span>{" "}
                            {element.content}
                          </li>
                        );
                      })}
                    </ul>
                  </p>
                  <span className="bold">Work: </span>Collective.
                  <br />
                  <div className="btn__wrapper">
                    <a
                      href={workItem.desktop__url}
                      target="_blank"
                      className="btn demo_btn"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faDesktop} /> Test Demo
                    </a>
                    <a
                      href={workItem.github__url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn github_btn"
                    >
                      <FontAwesomeIcon icon={faGithub} /> Github Repo
                    </a>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          );
        })}
      </div>
    </div>
  );
}
