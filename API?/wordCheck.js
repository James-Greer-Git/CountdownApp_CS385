import React from "react";
import {word} from "./word"
//console.log(word);

export default class FetchWord extends React.Component {
  state = {
    loading : true,
    word : word
  };


  async componentDidMount () {
    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + this.state.word;
    const response = await fetch(URL);
    const data = await response.json();
    //console.log(data);
    //console.log(word);
    console.log(data[0].meanings[0].definitions[0].definition)
  }

  render() {
    return (
      <div>
        {this.state.loading ? <div>loading...</div> : <div>word</div>}
      </div>
    );
  }
}
