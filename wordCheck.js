import React from "react";

export default class FetchWord extends React.Component {
  state = {
    loading : true
  };


  async componentDidMount () {
    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    console.log(data[0].meanings)
  }

  render() {
    return (
      <div>
        {this.state.loading ? <div>loading...</div> : <div>person</div>}
      </div>
    );
  }
}
