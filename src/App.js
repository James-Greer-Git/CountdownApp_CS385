//import "./App.css";
import React, { Component } from "react";
import Timer1 from "./Timer1";
import Timer2 from "./Timer2";
import SearchForm from "./SearchForm";
import RandomLetters from "./RandomLetters";
import TimesUpScreen from "./TimesUpScreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "",
      seconds: 0,
      playPressed: false,
      submitPressed: false,
      timesUp: false
    };
    this.onBackToHomePagePress = this.onBackToHomePagePress.bind(this);
    this.onPlayButtonPress = this.onPlayButtonPress.bind(this);
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
    this.onEasyButtonPress = this.onEasyButtonPress.bind(this);
    this.onMediumButtonPress = this.onMediumButtonPress.bind(this);
    this.onHardButtonPress = this.onHardButtonPress.bind(this);
  }
  onEasyButtonPress() {
    this.setState({ choice: "Easy", seconds: 60 });
    console.log("Easy Button Pressed");
  }
  onMediumButtonPress() {
    this.setState({ choice: "Medium", seconds: 45 });
    console.log("Medium Button Pressed");
  }
  onHardButtonPress() {
    this.setState({ choice: "Hard", seconds: 3 });
    console.log("Hard Button Pressed");
  }
  onBackToHomePagePress() {
    this.setState({ choice: "", playPressed: false, submitPressed: false });
    console.log("Homepage Button Pressed");
  }
  onPlayButtonPress() {
    this.setState({ playPressed: true });
    console.log("Play Button Pressed");
  }
  onSubmitButtonPress() {
    this.setState({ submitPressed: true });
  }
  onTimesUp() {
    this.setState({ timesUp: true });
  }

  render() {
    var condition1 = this.state.choice === "";
    var condition2 = !condition1 && !this.state.playPressed;
    var condition3 = this.state.playPressed && !this.state.submitPressed;
    var condition4 = this.state.playPressed && !this.state.timesUp;

    return (
      <div>
        <h2>Countdown Game</h2>
        <button onClick={this.onBackToHomePagePress}>Back to homepage</button>
        {condition1 && (
          <div>
            <h3>Choose a Difficulty</h3>
            <button onClick={this.onEasyButtonPress}>Easy</button> 60 Second
            Round<hr></hr>
            <button onClick={this.onMediumButtonPress}>Medium</button> 45 Second
            Round<hr></hr>
            <button onClick={this.onHardButtonPress}>Hard</button> 30 Second
            Round
          </div>
        )}
        {condition2 && (
          <div>
            <button onClick={this.onPlayButtonPress}>Play</button>
          </div>
        )}
        {condition4 && (
          <div>
            {condition3 && (
              <Timer2
                timesUp={this.state.timesUp}
                initialSeconds={this.state.seconds}
              />
            )}
            <b>
              <RandomLetters />
            </b>
            <p></p>
            <SearchForm submitPressed={this.onSubmitButtonPress} />
          </div>
        )}
        {this.state.timesUp && <TimesUpScreen />}
      </div>
    );
  }
}
export default App;
