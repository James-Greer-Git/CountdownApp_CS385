import React, { Component } from "react";
import { randomwords } from "./RandomWords.js";
var randomvar = randomwords;

class RandomLetters extends Component {
  randomword() {}
  render() {
    var text = "";
    var character = "";
    var possible = randomvar[Math.floor(Math.random() * randomvar.length)];

    for (var i = 0; i < 9; i++) {
      character = possible.charAt(Math.floor(Math.random() * possible.length));
      text += character;
      possible = possible.replace(character, "");
    }

    return (
      <div className="App">
        {text.toUpperCase()}
        <br />
      </div>
    );
  }
}
export default RandomLetters;
