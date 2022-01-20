import "./App.css";
import React, { Component } from "react";
import Congratulations from "./Congratulations";
import "bootstrap/dist/css/bootstrap.min.css";
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //user input characters
      searchTerm: "",
      //the amount of points the user has gotten from the characters they enetered
      points: "",
      //check if the user used the characters given
      wrongInput: false,
      wrongcharacter: true,
      SubmitPressed: false,
      //length of the word the user enetered
      len: 0,
      //the string the user submitted
      word: ""
    };

    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
  }
  onSearchFormChange(event) {
    //regex for only entering characters
    var retest = /^[a-zA-Z]+$/;

    if (event.target.value === "" || retest.test(event.target.value)) {
      this.setState({ searchTerm: event.target.value });
      this.setState({ wrongcharacter: true });
    } else {
      this.setState({ wrongcharacter: false });
    }
  }
  //checks the user input and if it matched the characters given.
  onSubmitButtonPress() {
    var answer = this.props.bestAnswer.toUpperCase();

    var userInput = this.state.searchTerm.toUpperCase();
    var userInputlength = userInput.length;
    var breakLoop = false;
    var count = 0;

    for (var j = 0; j < answer.length + 1; j++) {
      for (var i = 0; i < userInput.length; i++) {
        if (userInput.length > 0 && !breakLoop) {
          if (userInput.charAt(0) === answer.charAt(j)) {
            console.log(userInput.charAt(0));
            console.log(answer.charAt(j));
            userInput =
              userInput.substring(0, 0) +
              userInput.substring(1, userInput.length);
            answer = answer.replace(answer.charAt(j), "");
            console.log(answer);
            console.log(userInput);
            count = count + 1;

            i = 0;
            j = 0;
          } else if (userInput === answer && userInput.length === 1) {
            count = count + 1;
          } else {
            /* else if (userInput.charAt(i) === answer.charAt(j)) {
          character = answer.charAt(j);
          answer = answer.replace(character, "");
          count = count + 1;}*/
            console.log(
              "i: " +
                i +
                " j: " +
                j +
                " " +
                userInput.charAt(i) +
                " " +
                answer.charAt(j)
            );
          }
        }
      }

      if (count === userInputlength) {
        console.log("Setting wrong input to true :(");
        this.setState({ wrongInput: true });
        break;
      }

      if (userInput.length === 0) {
        console.log("Setting wrong Input to false :)");
        this.setState({ wrongInput: false });
        break;
      }
    }
    console.log(count);
    console.log(userInputlength);
    console.log(userInput);

    this.props.submitPressed();
    this.setState({
      SubmitPressed: true,
      word: this.state.searchTerm,
      len: this.state.searchTerm.length
    });
  }
  render() {
    let wronganswer = this.state.wrongcharacter;

    return (
      <div className="AnswerForm">
        {this.state.SubmitPressed === true || this.props.isFinished ? (
          <Congratulations
            word={this.state.word}
            wordlength={this.state.len}
            submitPressed={this.state.SubmitPressed}
            bestAnswer={this.props.bestAnswer.toUpperCase()}
            wrongInput={this.state.wrongInput}
            wrongcharacters={this.state.wrongcharacter}
            isFinished={this.props.isFinished}
          />
        ) : (
          <div>
            {!this.props.isFinished && (
              <div>
                <p>Type in your answer here:</p>
                <input
                  type="text"
                  className="form-control"
                  maxLength={9}
                  value={this.state.searchTerm}
                  onChange={this.onSearchFormChange}
                  required
                />

                {wronganswer === false ? (
                  <p>You have entered an invalid character</p>
                ) : null}
                <button
                  type="button"
                  className="btn btn-primary btn-lg submit"
                  onClick={this.onSubmitButtonPress}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
export default SearchForm;
