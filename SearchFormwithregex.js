import React, { Component } from "react";
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      pionts: "",
      wrongInput: true,
      submitPressed: false,
      len: 0
    };
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
  }
  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
    this.setState({ submitPress: false });
    let sTerm = event.target.value;
    let numChars = sTerm.length;
    this.setState({ word: this.state.searchTerm });
    this.setState({ len: numChars });
  }
  onSubmitButtonPress() {
    this.setState({ submitPress: true, word: this.state.searchTerm });
  }
  render() {
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;
    let wronganswer = this.props.wrongInput;
    const letters1 = "ALBELLING";

    return (
      <div className="AnswerForm">
        <hr />
        <h1>PRESS PLAY TO BEGIN</h1>
        <button>PLAY!</button>
        <hr />
        <h3>Timer</h3>
        <h3>Pionts</h3>
        {this.state.len} <hr />
        <h3>Letters</h3>
        {letters1}
        <hr />
        <form>
          <b>Type your answer here: </b>
          <input
            type="text"
            maxLength={9}
            value={searchTermFromProps}
            onChange={onChangeFromProps}
          />
        </form>
        {wronganswer === false ? (
          <p>You have entered an invalid character</p>
        ) : null}
        <hr />
      </div>
    );
  }
}
export default SearchForm;
