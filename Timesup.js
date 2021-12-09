import React, { Component } from "react";
import Timer2, { isFinished } from "./Timer2";
import GlobalPoints, { points } from "./GlobalPoints";
//import isFinished from "./Timer2";

class TimesUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Timesup">
        <h1>Time's up! </h1>
        <h2>
          {" "}
          You got: <br /> {points}{" "}
        </h2>
        <h2> Answers:</h2>
      </div>
    );
  }
}
export default TimesUp;
