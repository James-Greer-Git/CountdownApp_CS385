import "./App.css";
import Timer2 from "./Timer2";
import React, { Component } from "react";
import Game from "./Game.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      len: 1,
      SubmitPressed: false,
      choice: "",
      seconds: 60,
      wrongInput: true
    };
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.EasyButtonPress = this.EasyButtonPress.bind(this);
    this.MediumButtonPress = this.MediumButtonPress.bind(this);
    this.HardButtonPress = this.HardButtonPress.bind(this);
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
  }

  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  EasyButtonPress() {
    this.setState({ choice: "Easy", seconds: 60 });
  }
  MediumButtonPress() {
    this.setState({ choice: "Medium", seconds: 45 });
  }
  HardButtonPress() {
    this.setState({ choice: "Hard", seconds: 30 });
  }

  //regexCheck(event) {}
  onSubmitButtonPress() {
    this.setState({ SubmitPressed: true, word: this.state.searchTerm });
  }

  render() {
    return (
      <div className="App">
        <h2>Countdown Game</h2>
        <hr></hr>
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
            {this.state.SubmitPressed === true ? (
              <div>True</div>
            ) : (
              <div>
                You selected: {this.state.choice}
                <Game />
                <Timer2 initialSeconds={this.state.seconds} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default App;
