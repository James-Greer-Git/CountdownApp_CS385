import React, { Component } from "react";
import RandomLetters from "./RandomLetters";
import SearchForm from "./SearchForm.js";
import Definition from "./Definition";
import Timer2 from "./Timer2";

import { BrowserRouter as Route, Redirect } from "react-router-dom";

class Game extends Component {
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
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
    this.changeLetters = this.changeLetters.bind(this);
    this.onPlayButtonPress = this.onPlayButtonPress.bind(this);
    this.onPlayAgainPress = this.onPlayAgainPress.bind(this);
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
  }

  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value, choice: "" });
  }
  onSubmitButtonPress() {
    this.setState({ submitPress: true, word: this.state.searchTerm });
  }
  onPlayAgainPress() {
    this.setState({ choice: "", PlayPressed: false, submitPress: false });
  }
  onPlayButtonPress() {
    this.setState({ PlayPressed: true });
    console.log("Play Button Pressed");
  }
  changeLetters() {
    this.setState({ Changeletters: true });
  }

  render() {
    const choice = this.props.choice;
    return (
      <div className="Game">
        <div>
          {this.state.Changeletters === true ? (
            <Route
              exact
              path="./"
              render={() => {
                return <Redirect to="" />;
              }}
            />
          ) : null}
        </div>
        {this.state.PlayPressed ? (
          <div>
            <Timer2 initialSeconds={this.props.seconds} />
            {this.state.submitPress ? (
              <div></div>
            ) : (
              <div>
                <h2>
                  <RandomLetters />
                </h2>

                <SearchForm />
              </div>
            )}
            {this.state.submitPress ? (
              <div>
                <Definition word={this.state.word} />
                <div>
                  Points: {this.state.word.length}
                  <div>
                    <button onClick={this.onPlayAgainPress}>Play Again</button>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          <div>
            <p>
              <b>You chose: {choice} Difficulty</b>
            </p>
            <p>Press Play to Begin</p>
            <div>
              <button onClick={this.onPlayButtonPress}>Play</button>
            </div>
          </div>
        )}
      </div>
    ); // end of return statement
  } // end of render function
}

export default Game;
