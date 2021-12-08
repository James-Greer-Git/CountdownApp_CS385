import React, { Component } from "react";
import GenerateRandomLetters from "./GenerateRandomLetters";
import SearchForm from "./SearchForm.js";

import { BrowserRouter as Route, Redirect, Router } from "react-router-dom";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SubmitPressed: false,
      Changeletters: false
    };
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
    this.changeLetters = this.changeLetters.bind(this);
  }

  onSubmitButtonPress() {
    this.setState({ SubmitPressed: true });
  }
  changeLetters() {
    this.setState({ Changeletters: true });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changeLetters}>New Letters</button>
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

        <button onClick={this.onSubmitButtonPress} Link to="/App">
          Back To Homepage
        </button>

        <h1>PRESS PLAY TO BEGIN</h1>
        <button>PLAY!</button>
        <hr />
        <h3>Timer</h3>

        <h3>Pionts</h3>

        <h3>Letters</h3>
        <GenerateRandomLetters />
        <SearchForm />
      </div>
    ); // end of return statement
  } // end of render function
}

export default Game;
