import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Definition from "./Definition";

class Congratulations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //updates the word that the user has entered
      word: "",
      //checks if the api returns a definition
      definitionFound: false,
      //the amount of definitions returned
      apiData: [],
      //the definition returned from the api
      definition: []
    };
  }

  //api call
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
    var word = this.props.word;
    //returns the longest possible answer the user could have entered from the characters given
    const bestAnswer = this.props.bestAnswer;
    //length of the word that the user inputted
    var wordlength = this.props.wordlength;
    //checks the characters that the user has inputted
    var condition1 = this.props.wrongInput;
    //was the definition found
    var condition2 = this.state.definitionFound;
    //definition was not returned
    var condition3 = !this.state.definitionFound;
    //was the submit button pressed
    var condition4 = this.props.submitPressed;

    return (
      <div className="Congratulations">
        {this.props.isFinished && (
          <div>
            <h1>TIMES UP!</h1>
            <br />
            <h2>You Got:</h2>
            <h3>0 Points</h3>
            <br />
            <h5>
              The best answer was: <br />
              {this.props.bestAnswer.toUpperCase()}
            </h5>
          </div>
        )}

        {condition4 && condition1 && (
          <div className="Congratspage">
            {condition2 && (
              <div>
                <h1>CONGRATULATIONS</h1>
                <br />
                <h2>You Got:</h2>
                <h3>{wordlength} Points</h3>
                <br />
                <h2>You Typed: {word.toUpperCase()}</h2>
                <br />
                <h6>
                  Definition: <Definition word={word} />
                </h6>
                <br />
                <h6>
                  The best answer was: <br />
                  {bestAnswer}
                </h6>
              </div>
            )}
          </div>
        )}

        {(condition4 || !this.props.isFinished) && (
          <div>
            {(condition3 || !condition1) && (
              <div className="Congratspage">
                <h1>SORRY YOUR ANSWER IS INCORRECT</h1>
                <h2>You Got:</h2>
                <h3>0 Points</h3>
                <br />
                {(condition1 || wordlength !== 0) && (
                  <div>
                    <h2>
                      {word.toUpperCase()} not made up of the given characters
                    </h2>
                  </div>
                )}
                {!condition2 && condition1 && (
                  <div>
                    <h2>{word.toUpperCase()} not a word</h2>
                  </div>
                )}
                {wordlength === 0 && (
                  <div>
                    <h2>You have not entered any characters</h2>
                  </div>
                )}
                <br />

                <h2>The best answer was: </h2>
                <br />
                <h3>{bestAnswer}</h3>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Congratulations;
