import React, { Component } from "react";

class Difficulty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "",
      seconds: 60
    };
    this.EasyButtonPress = this.EasyButtonPress.bind(this);
    this.MediumButtonPress = this.MediumButtonPress.bind(this);
    this.HardButtonPress = this.HardButtonPress.bind(this);
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

  render() {
    return (
      <div className="App">
        <div>
          <h3>Choose a Difficulty</h3>
          <button onClick={this.EasyButtonPress}>Easy</button> 60 Second Rounds
          <hr></hr>
          <button onClick={this.MediumButtonPress}>Medium</button> 45 Second
          Rounds
          <hr></hr>
          <button onClick={this.HardButtonPress}>Hard</button> 30 Second Rounds
        </div>
      </div>
    );
  }
}
export default Difficulty;
