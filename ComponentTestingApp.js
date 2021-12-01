import React, { Component } from "react";
import Definition from "./Definition";
import SearchForm from "./SearchForm";
//console.log(word);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    };
  }
  render() {
    return (
      /*<div>
        <Definition
        word = {this.state.word}
        />
      </div>*/
      <div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          onChange={this.onSearchFormChange}
        />
      </div>
    );
  }
}
export default App;
