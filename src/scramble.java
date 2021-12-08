import React, { Component } from "react";
import { wordList } from "./wordList.js";
var randomvar = wordList;

class scramble extends Component {
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

    return <h3>{text}</h3>;
  }
}
export default scramble;
