import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import { randomwords } from "./randomwords.js";
//export var word = randomvar[Math.floor(Math.random() * randomvar.length)];
/*function change(){
  var word = randomvar[Math.floor(Math.random() * randomvar.length)];
  console.log(word);
}*/
//export var word = change();
//var word = randomvar[Math.floor(Math.random() * randomvar.length)];

class GenerateRandomLetters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word
    };
  }
  render() {
    //var word = randomvar[Math.floor(Math.random() * randomvar.length)];
    var possible = this.props.word;
    //console.log("Random Letters " + possible)
    var text = "";
    var character = "";
    for (var i = 0; i < 9; i++) {
      character = possible.charAt(Math.floor(Math.random() * possible.length));
      text += character;
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
