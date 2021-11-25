import React, { Component } from "react";
import {word} from "./word"
//console.log(word);
class App extends Component {
  constructor(props) {
    super(props);
    console.log("in constructor");

    this.state = {
      apiData: [],
      loading : true,
      definition: [],
      word : word
    };
  }

  async componentDidMount () {
    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + this.state.word;
    const response = await fetch(URL);
    const data = await response.json();
    this.setState({apiData : data});
    //console.log(data);
    //console.log(word);
    this.setState({definition : data[0].meanings[0].definitions[0].definition});
    //console.log(data[0].meanings[0].definitions[0].definition)
    this.setState({loading : false})
    //console.log(this.state.definition);
  }

  render() {
    return (
      <div>
        {this.state.loading ? <div>loading...</div> : <div>Definition: {this.state.definition}</div>}
      </div>
    );
  }
}
export default App;
