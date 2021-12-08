import "./App.css";
import Timer2 from "./Timer2";
import React, { Component } from "react";
import Definition from "./Definition";
import SearchForm from "./SearchForm";
//import Difficulty from "./Difficulty";

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
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
    this.EasyButtonPress = this.EasyButtonPress.bind(this);
    this.MediumButtonPress = this.MediumButtonPress.bind(this);
    this.HardButtonPress = this.HardButtonPress.bind(this);
    this.onPlayButtonPress = this.onPlayButtonPress.bind(this);
    this.onPlayAgainPress = this.onPlayAgainPress.bind(this);
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
  onPlayButtonPress() {
    this.setState({ PlayPressed: true });
    console.log("Play Button Pressed");
  }
  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  onSubmitButtonPress() {
    this.setState({ submitPress: true, word: this.state.searchTerm });
  }
  onPlayAgainPress() {
    this.setState({ choice: "", PlayPressed: false, submitPress: false });
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
            {this.state.PlayPressed ? (
              <div>
                {this.state.submitPress ? (
                  <div></div>
                ) : (
                  <div>
                    <Timer2 initialSeconds={this.state.seconds} />
                    <SearchForm
                      searchTerm={this.state.searchTerm}
                      onChange={this.onSearchFormChange}
                    />
                    <button onClick={this.onSubmitButtonPress}>Submit</button>
                  </div>
                )}
                {this.state.submitPress ? (
                  <div>
                    <Definition word={this.state.word} />
                    <div>
                      Points: {this.state.word.length}
                      <div>
                        <button onClick={this.onPlayAgainPress}>
                          Play Again
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            ) : (
              <div>
                <b>You chose {this.state.choice}</b>
                <div>
                  <button onClick={this.onPlayButtonPress}>Play</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default App;
