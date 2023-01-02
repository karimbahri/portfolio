import React, { useEffect, useState, useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useFiglet } from "react-hook-figlet";
import { Terminal } from "react-bootstrap-icons";

export default function Contact() {
  const [figletText, setSourceText] = useFiglet();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    msg: ""
  });
  const [emailFieldClass, setEmailFieldClass] = useState("hidden");
  const [msgFieldClass, setMsgFieldClass] = useState("hidden");
  const [notificationClass, setNotificationClass] = useState("");
  const [notificationMsg, setNotificationMsg] = useState("");
  const fullNameRef = useRef();
  const emailFieldRef = useRef();
  const messageFieldRef = useRef();

  const onSubmit = (event, field, setFieldClass, fieldName) => {
    if (event.key === "Enter") {
      if (!checkInput(fieldName, event.target.value)) {
        setNotificationClass("appear warning");
        hideNotification();
      } else {
        setFieldClass("");
        setFocus(field);
      }
      event.preventDefault();
    }
  };

  const hideNotification = () => {
    setTimeout(() => {
      setNotificationClass("");
    }, 2000);
  };
  const sendRequest = (event) => {
    if (event.key === "Enter") {
      if (event.target.value.length < 6) {
        setNotificationClass("appear warning");
        setNotificationMsg("Enter valid message");
        hideNotification();
      } else {
        setData({ ...data, msg: event.target.value });
        console.log(data);
        setEmailFieldClass("hidden");
        setMsgFieldClass("hidden");
        setFocus(fullNameRef);
        resetInput();
        setNotificationClass("appear success");
        setNotificationMsg("successfully sent");
        hideNotification();
      }
      event.preventDefault();
    }
  };

  const checkInput = (inputID, inputValue) => {
    if (inputID === "fullname") {
      if (!/^[a-z\s]{2,}$/g.test(inputValue)) {
        setNotificationMsg("Enter valid name");
        return false;
      }
      setData({ ...data, fullName: inputValue });
    }
    if (inputID === "email") {
      if (!/^[a-z0-9._-]+@[a-z0-9]+\.[a-z]{2,}$/g.test(inputValue)) {
        setNotificationMsg("Enter valid email");
        return false;
      }
      setData({ ...data, email: inputValue });
    }
    return true;
  };

  const setFocus = (field) => {
    setTimeout(() => {
      field.current.focus();
    }, 100);
  };

  const resetInput = () => {
    fullNameRef.current.value = "";
    emailFieldRef.current.value = "";
    messageFieldRef.current.value = "";
  };

  useEffect(() => {
    setSourceText("contact.sh");
  }, []);
  return (
    <div className="contact" id="contact">
      <h1 className="section_header">Get In Touch</h1>
      <AnimationOnScroll
        className="contact__widget"
        animateIn="animate__zoomIn"
        offset="300"
      >
        {/* <div className="contact__widget"> */}
        <div className="contact__header">
          <Terminal className="bi" />
          <h1>Get_In_Touch.sh</h1>
          <span className="window_btn green"></span>
          <span className="window_btn yellow"></span>
          <span className="window_btn red"></span>
        </div>
        <div className="contact__widget__body">
          <pre className="figlet">{figletText}</pre>
          <div className="field field-1">
            <label htmlFor="field__name">{"Full Name > "}</label>
            <textarea
              type="text"
              id="field__name"
              className="contact__form__field"
              autoComplete="nope"
              maxLength="25"
              ref={fullNameRef}
              onKeyDown={(event) =>
                onSubmit(event, emailFieldRef, setEmailFieldClass, "fullname")
              }
            ></textarea>
          </div>
          <div className={`field field-2 ${emailFieldClass}`}>
            <label htmlFor="field__email">{"Email > "}</label>
            <textarea
              type="text"
              autoComplete="nope"
              id="field__email"
              className="contact__form__field"
              maxLength="50"
              ref={emailFieldRef}
              onKeyDown={(event) =>
                onSubmit(event, messageFieldRef, setMsgFieldClass, "email")
              }
            ></textarea>
          </div>
          <div className={`field field-2 ${msgFieldClass}`}>
            <label htmlFor="field__message">{"Leave something > "}</label>
            <textarea
              id="field__message"
              rows="1"
              className="contact__form__field"
              ref={messageFieldRef}
              onKeyDown={(event) => {
                sendRequest(event);
              }}
            ></textarea>
          </div>
          <p className={`notification ${notificationClass}`}>
            {`** ${notificationMsg} **`}
          </p>
        </div>
        {/* </div> */}
      </AnimationOnScroll>
    </div>
  );
}
