import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Timer2 from "./Timer2";
import RandomLetters from "./GenerateRandomLetters";
import SearchForm from "./SearchForm";
import { randomwords } from "./randomwords.js";
import logo from "./countdown.jpg";
var randomvar = randomwords;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      len: 1,
      SubmitPressed: false,
      choice: "",
      seconds: 60,
      wrongInput: true,
      playPressed: false,
      possible: randomvar[Math.floor(Math.random() * randomvar.length)]
    };
    this.onBackToHomePagePress = this.onBackToHomePagePress.bind(this);
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.EasyButtonPress = this.EasyButtonPress.bind(this);
    this.MediumButtonPress = this.MediumButtonPress.bind(this);
    this.HardButtonPress = this.HardButtonPress.bind(this);
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
    this.onPlayButtonPress = this.onPlayButtonPress.bind(this);
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
  onPlayButtonPress() {
    this.setState({ playPressed: true });
  }
  onSubmitButtonPress() {
    this.setState({ SubmitPressed: true, word: this.state.searchTerm });
  }
  onBackToHomePagePress() {
    this.setState({ choice: "", playPressed: false, SubmitPressed: false });
  }

  render() {
    var condition1 = this.state.choice === "";
    var condition2 = !condition1 && !this.state.playPressed;
    var condition3 = this.state.playPressed;
    var condition4 = !this.state.SubmitPressed;

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            {condition1 && (
              <div className="homepage_writing">
                <img className="logo col-12" src={logo} alt="countdown logo" />

                <div className="Title col-12">
                  <h1>COUNTDOWN GAME </h1>
                  <h3>Choose a Difficulty</h3>
                </div>
                <div className="row space">
                  <div className="buttonspacing col-sm">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={this.EasyButtonPress}
                    >
                      Easy
                      <br />
                      60 Seconds
                    </button>{" "}
                  </div>
                  <div className="buttonspacing col-sm">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={this.MediumButtonPress}
                    >
                      Medium <br />
                      45 Seconds
                    </button>{" "}
                  </div>
                  <div className="buttonspacing col-sm">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={this.HardButtonPress}
                    >
                      Hard
                      <br />
                      30 Seconds
                    </button>{" "}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="App">
          <div className="container">
            {condition2 && (
              <div className="gamepage">
                <div className="backtohomepage">
                  <div className="row">
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
                        onClick={this.onBackToHomePagePress}
                      >
                        Back to homepage
                      </button>
                    </div>
                  </div>
                </div>
                <h1>COUNTDOWN GAME </h1>
                <h2>PRESS PLAY TO BEGIN</h2>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={this.onPlayButtonPress}
                    >
                      Play
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {condition3 && (
          <div>
            <div className="gamepage">
              {condition4 && (
                <div className="backtohomepage container">
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={this.onBackToHomePagePress}
                    >
                      Back to homepage
                    </button>
                  </div>
                  <div className="gamepagespace">
                    <h1>COUNTDOWN GAME</h1>
                    <p>You have selected : {this.state.choice}</p>
                    <hr />
                    <h3>Timer</h3>
                    <Timer2 initialSeconds={this.state.seconds} />
                    <h3>Letters</h3>
                    <div className="row">
                      <div className="col-12">
                        <RandomLetters word={this.state.possible} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <SearchForm
                  bestAnswer={this.state.possible}
                  submitPressed={this.onSubmitButtonPress}
                  //Need to add timesUp check to get rid of everything if it runs out
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
