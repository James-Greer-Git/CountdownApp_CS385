import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Definition extends Component {
  constructor(props) {
    super(props);
    console.log("in constructor");

    this.state = {
      apiData: [],
      definition: [],
      definitionFound: false
    };
  }

  async componentDidMount() {
    try {
      const word = this.props.word;
      const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
      const response = await fetch(URL);
      const data = await response.json();
      this.setState({ apiData: data });
      this.setState({
        definition: data[0].meanings[0].definitions[0].definition
      });
      this.setState({ definitionFound: true });
    } catch {
      this.setState({ definitionFound: false });
    }
  }

  render() {
    return (
      <div>
        {this.state.definitionFound ? (
          <div>{this.state.definition}</div>
        ) : (
          <div>{this.props.word} is not a word.</div>
        )}
      </div>
    );
  }
}
export default Definition;
