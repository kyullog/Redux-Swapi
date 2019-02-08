import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getData();
    // call our action
  }

  render() {
    // return <h1>Testing</h1>;
    if (this.props.fetching) {
      return <h2>Loading</h2>;
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.loading
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getData
    /* action creators go here */
  }
)(CharacterListView);
