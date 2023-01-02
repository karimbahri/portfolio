import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Homepage() {
  return (
    <div className={"homepage"}>
      <video
        src={"/assets/images/homepage_bg.mp4"}
        className={"homepage__bg"}
        autoPlay
        muted
        loop
      />
      <h1 className={"homepage__greeting"}>
        <Typewriter
          words={[
            "Hola! My name is Karim Bahri",
            "I AM A FULL-STACK WEB DEVELOPER"
          ]}
          loop={0}
          deleteSpeed={20}
          cursor
          cursorStyle={"|"}
        />
      </h1>
    </div>
  );
}
