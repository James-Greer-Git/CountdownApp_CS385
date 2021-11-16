import React from "react";

export default class FetchWord extends React.Component {
  state = {
    loading : true
  };


  async componentDidMount () {
    const URL = "https://od-api.oxforddictionaries.com/api/v2";
    const response = await fetch(URL, {headers : {"app_id" : "", "app_key" : ""}});
    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        {this.state.loading ? <div>loading...</div> : <div>person</div>}
      </div>
    );
  }
}
