import React, { Component } from "react";
import Definition from "./Definition";
import generateRandomWords from "./GenerateRandomLetters";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      pionts: "",
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
    var re = generateRandomWords;

    if (event.target.value === "" || retest.test(event.target.value)) {
      this.setState({ searchTerm: event.target.value });
      this.setState({ wrongInput: true });
    } else {
      this.setState({ wrongInput: false });
    }
  }
  onSubmitButtonPress() {
    this.setState({ SubmitPressed: true, word: this.state.searchTerm });
  }
  render() {
    let wronganswer = this.state.wrongInput;

    return (
      <div className="AnswerForm">
        Type in your answer here:
        <form>
          <input
            maxLength={9}
            value={this.state.searchTerm}
            onChange={this.onSearchFormChange}
          />
        </form>
        {wronganswer === false ? (
          <p>You have entered an invalid character</p>
        ) : null}
        <hr />
        <button onClick={this.onSubmitButtonPress}>Submit</button>
        {this.state.SubmitPressed ? (
          <div>
            <Definition word={this.state.word} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default SearchForm;