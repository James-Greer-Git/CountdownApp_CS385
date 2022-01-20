import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Timer2 = (props) => {
  const { initialSeconds = 0, setIsFinished } = props;
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      //If the seconds are greater than 0 then the timer will start and -1
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      //If the seconds are at 0 then the seconds are cleared
      else if (seconds === 0) {
        setIsFinished();
        //This method gets called from app.js and permits parent-child communication between functional and class components.
        clearInterval(myInterval);
      }
      //When the interval is cleared, the seconds will be set to 59.
      //In reality, the seconds are determined on the main page and passed here through this.state.seconds.
      else {
        setSeconds(59);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);

  return (
    <div>
      {seconds === 0 ? null : (
        <h1> {{ seconds } < 10 ? `0${seconds}` : seconds}</h1>
      )}
    </div>
  );
};

export default Timer2;
