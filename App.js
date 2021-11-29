import React, { Component } from "react";
//import {ComponentA} from "./public/ComponentA";
//import {SearchForm} from "./public/SearchForm";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm : "", 
      len : 1, 
      SubmitPressed : false,
      choice : ""};
      this.onSearchFormChange = this.onSearchFormChange.bind(this);
      this.EasyButtonPress = this.EasyButtonPress.bind(this);
      this.MediumButtonPress = this.MediumButtonPress.bind(this);
      this.HardButtonPress = this.HardButtonPress.bind(this);
  }
  
EasyButtonPress(){
  this.setState({choice : "Easy"})
}
MediumButtonPress(){
  this.setState({choice : "Medium"})
}
HardButtonPress(){
  this.setState({choice : "Hard"})
}
onSearchFormChange(event) {
  this.setState({ searchTerm: event.target.value })
}
SubmitPressed(){
  this.setState({SubmitPressed : true});
}

  render(){
    return(
    <div className = "App">
      <h2>Countdown Game</h2>
      <hr></hr>
      {this.state.choice === "" ? 
      <div>
      <h3>Choose a Difficulty</h3>
        <button onClick = {this.EasyButtonPress}>Easy</button> 60 Second Rounds
      <hr></hr>
        <button onClick = {this.MediumButtonPress}>Medium</button> 45 Second Rounds
      <hr></hr>
        <button onClick = {this.HardButtonPress}>Hard</button> 30 Second Rounds
      </div> : 
          <div>
          You selected: {this.state.choice}
          <SearchForm
          searchTerm = {this.state.searchTerm}
          onChange = {this.onSearchFormChange}/>
          </div>
      }
    </div>
    );
  }
}
class SearchForm extends Component {
  render() {
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;

    return (
      <div className="SearchFormForm">
        <hr />
        Search Component:
        <form>
          <b>Type your search here: </b>
          <input type="text" 
          value={searchTermFromProps}
          onChange={onChangeFromProps}
          />
          <div>
            <button onClick = {this.SubmitPressed}>Submit</button>
          </div>
        </form>
        <hr />
      </div>
    );
  }
}
export default App;
