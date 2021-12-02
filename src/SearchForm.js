import React, { Component } from "react";
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this);
  }
  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
    this.setState({submitPress : false});
    let sTerm = event.target.value;
    let numChars = sTerm.length;
    this.setState({ word : this.state.searchTerm })
    this.setState({ len: numChars });
  }
  onSubmitButtonPress(){
    this.setState({submitPress : true, word : this.state.searchTerm});
  }
  render() {
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;

    return (
      <div className="AnswerForm">
        <hr />
        <form>
          <b>Type your answer here: </b>
          <input
            type="text"
            value={searchTermFromProps}
            onChange={onChangeFromProps}
          />
          
        </form>
        <hr />
      </div>
    );
  }
}
export default SearchForm;
