import React, { Component } from "react";
import Definition from "./Definition";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      pionts: "",
      wrongInput: true,
      submitPressed: false,
      len: 0,
      word: ""
    };

    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.onSubmitButtonPressed = this.onSubmitButtonPressed.bind(this);
  }
  onSubmitButtonPressed(){
    this.setState({submitPressed: true, word: this.state.searchTerm});
    this.props.submitPressed();
    console.log("Search Form Submit Pressed");
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
  render() {
    let wronganswer = this.state.wrongInput;

    return (
      <div className="AnswerForm">
        {this.state.submitPressed ? (
          <div>
            <Definition word={this.state.word} />
          </div>
        ) : (
          <div>
            Type in your answer here:
            <form>
              <input
                maxLength={9}
                value={this.state.searchTerm}
                onChange={this.onSearchFormChange}
              />
            </form>
            <button onClick={this.onSubmitButtonPressed}>Submit</button>
            {wronganswer === false ? (
              <p>You have entered an invalid character</p>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
export default SearchForm;
