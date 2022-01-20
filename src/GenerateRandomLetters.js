import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class GenerateRandomLetters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //word that was randomly picked from the array in randomwords.js
      word: this.props.word
    };
  }
  render() {
    var possible = this.props.word;

    var text = "";
    var character = "";
    for (var i = 0; i < 9; i++) {
      //this picks a random letter
      character = possible.charAt(Math.floor(Math.random() * possible.length));
      //add the random letter picked to a new variable
      text += character;
      //replace that character with nothing so it cannot be picked again
      possible = possible.replace(character, "");
    }

    return (
      <div className="Letters">
        {text.toUpperCase()}
        <br />
      </div>
    );
  }
}

export default GenerateRandomLetters;
