import "./App.css";
import React, { Component } from "react";
import Congratulations from "./Congratulations";
import "bootstrap/dist/css/bootstrap.min.css";
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      points: "",
      wrongInput: true,
      SubmitPressed: false,
      len: 0,
      word: ""
    };

    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
  }
  onSearchFormChange(event) {
    var retest = /^[a-zA-Z]+$/;

    if (event.target.value === "" || retest.test(event.target.value)) {
      this.setState({ searchTerm: event.target.value });
      this.setState({ wrongInput: true });
    } else {
      this.setState({ wrongInput: false });
    }
  }

  onSubmitButtonPress() {
    //console.log(this.state.searchTerm)
    var answer = this.props.bestAnswer;
    var userInput = this.state.searchTerm;
    var count = 0;

    for (var i = 0; i < userInput.length; i++) {
      if (userInput.length > 0) {
        if (userInput.charAt(0) === answer.charAt(i)) {
          userInput = userInput.substring(1);
          answer =
            answer.substring(0, i) + answer.substring(i + 1, answer.length);
        } else {
          count++;
          console.log("Count: " + count);
          if (count == answer.length) {
            this.setState({ wrongInput: true });
          }
        }
      }
    }

    //console.log(this.props.bestAnswer);
    //console.log("userError " + this.state.wrongInput);
    this.props.submitPressed();
    this.setState({
      SubmitPressed: true,
      word: this.state.searchTerm,
      len: this.state.searchTerm.length
    });
  }
  render() {
    let wronganswer = this.state.wrongInput;
    //console.log("Search Form " + this.props.bestAnswer)

    return (
      <div className="AnswerForm">
        {this.state.SubmitPressed === true ? (
          <Congratulations
            word={this.state.word}
            wordlength={this.state.len}
            submitbutton={this.state.SubmitPressed}
            bestAnswer={this.props.bestAnswer.toUpperCase()}
            wrongInput={this.state.wrongInput}
          />
        ) : (
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
    );
  }
}
export default SearchForm;
