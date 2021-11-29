import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    // this.props are the properties which are provided or passed
    // to this component. We have the searchTerm and we have the
    // onChange function.
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
        </form>
        <hr />
      </div>
    );
  }
} // close the SearchForm Component

export default SearchForm;
