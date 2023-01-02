import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function Header() {
  const checkboxRef = useRef();
  const onClickUrl = () => {
    checkboxRef.current.checked = false;
  };
  return (
    <header className="header">
      <span className="signature">Karim Bahri</span>
      <input
        type="checkbox"
        className="navBar__checkbox"
        id="navBar__checkbox"
        ref={checkboxRef}
      />
      <label htmlFor="navBar__checkbox" className="navBar__toggle">
        <FontAwesomeIcon className={"fa fa-solid fa-bars"} icon={faBars} />
        <FontAwesomeIcon
          className={"fa fa-sharp fa-solid fa-xmark"}
          icon={faXmark}
        />
      </label>
      <ul>
        <li>
          <a href="#whoami" onClick={onClickUrl}>
            WHO AM I
          </a>
        </li>
        <li>
          <a href="#services" onClick={onClickUrl}>
            WHAT I DO
          </a>
        </li>
        <li>
          <a href="#work" onClick={onClickUrl}>
            WORK
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClickUrl}>
            CONTACT
          </a>
        </li>
      </ul>
    </header>
  );
}
