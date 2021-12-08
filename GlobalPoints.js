import React, { Component } from "react";
import GenerateRandomLetters from "./GenerateRandomLetters";
import SearchForm from "./SearchForm.js";
import App from "./App.js";

class GlobalPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      Global:0
    };
  }

pointsTotal() {
  const length = require('./SearchForm.js');
  this.setState({points:length});
  console.log("Length:" + length)
  this.setState({Global:this.state.points+this.state.Global});
}
  render(){
    return(
      <div className="GlobalPoints"> {this.state.Global} </div>

    )
  }
}

export default GlobalPoints;

/*wordLength(searchTerm) {
  let string =searchTerm;
  console.log(string)
  this.setState({len:string.length});
  console.log(this.state.len);
  let length=this.state.len;
  //export var length ;
  SearchForm.exports = {length};
