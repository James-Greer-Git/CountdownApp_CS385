import React, { Component } from "react";
import Definition from "./Definition"
class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      //word : "Hello",
      searchTerm : "",
      submitPress : false
    }
  }
  SubmitPressed(){
    this.setState({submitPress : false})
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
          <input type="text" 
          value={searchTermFromProps}
          onChange={onChangeFromProps}
          />
          <div>
            <button onClick = {this.SubmitPressed}>Submit</button>
            {this.state.submitPress ? <div>
              <Definition
              searchTerm = {this.state.searchTerm}/>
            </div> :
             <div>
              
             </div>}
          </div>
        </form>
        <hr />
      </div>
    );
  }
}
export default SearchForm;
