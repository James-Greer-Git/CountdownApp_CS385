import React, { Component } from "react";
import Definition from "./Definition";
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
  }
  onSearchFormChange(event){
    this.setState({searchTerm: event.target.value});
    return(
      <Definition
          word = {this.state.searchTerm}
          />
    )
  }
  SubmitPressed() {
    console.log("Submit Button Pressed")
    this.setState({SubmitPressed : true})
  }
  render() {
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;

    return (
      <div className="SearchFormForm">
        <hr />
        Search Component:
        <form>
          <b>Type your search here: </b>
          <input
            type="text"
            value={searchTermFromProps}
            onChange={onChangeFromProps}
          />
          <div>
            <button onClick = {this.SubmitPressed}>Submit</button>
          </div>
          {this.state.SubmitPressed ? <div>{this.state.searchTerm}</div> : <div></div>}
        </form>
        <hr />
      </div>
    );
  }
}
export default SearchForm;
