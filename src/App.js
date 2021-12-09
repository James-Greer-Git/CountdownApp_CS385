import "./App.css";
import React, { Component } from "react";
import Game from "./Game";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      len: 1,
      SubmitPressed: false,
      choice: "",
      seconds: 60,
      PlayPressed: false
    };
    this.EasyButtonPress = this.EasyButtonPress.bind(this);
    this.MediumButtonPress = this.MediumButtonPress.bind(this);
    this.HardButtonPress = this.HardButtonPress.bind(this);
    this.onHomePagePress = this.onHomePagePress.bind(this);
  }

  EasyButtonPress() {
    this.setState({ choice: "Easy", seconds: 60 });
    console.log("Easy Button Pressed");
  }
  MediumButtonPress() {
    this.setState({ choice: "Medium", seconds: 45 });
    console.log("Medium Button Pressed");
  }
  HardButtonPress() {
    this.setState({ choice: "Hard", seconds: 30 });
    console.log("Hard Button Pressed");
  }
  onHomePagePress() {
    this.setState({ choice: "", seconds: 60, PlayPressed: false });
  }

  render() {
    return (
      <div className="App">
        <h2>Countdown Game</h2>
        {this.state.choice === "" ? (
          <div>
            <h3>Choose a Difficulty</h3>
            <button onClick={this.EasyButtonPress}>Easy</button> 60 Second
            Rounds
            <hr></hr>
            <button onClick={this.MediumButtonPress}>Medium</button> 45 Second
            Rounds
            <hr></hr>
            <button onClick={this.HardButtonPress}>Hard</button> 30 Second
            Rounds
          </div>
        ) : (
          <div>
            <button onClick={this.onHomePagePress}>Back To Homepage</button>
            <div>
              <hr></hr>
              <Game seconds={this.state.seconds} choice={this.state.choice} />
              <hr></hr>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
