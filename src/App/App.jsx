import React, { Component } from "react";
import { connect } from "react-redux";
import Typed from "./TypedComp";
import { getDataFromServer } from './actions';
import { bindActionCreators } from "../../../Library/Caches/typescript/3.3/node_modules/redux";

class App extends Component {

  componentDidMount(){
    this.props.getDataFromServer();
  }


  handleUpdate = e => {
    this.props.setWords(e.target.value);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleUpdate} />
        <Typed />
        <p>Data from server: {this.props.dataFromServer}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  words: state.appReducer.words,
  dataFromServer: state.appReducer.data
});

const mapDispatchToProps = dispatch => ({
  setWords: words => dispatch({type:'SETWORDS', payload: words}),
  getDataFromServer: ()=> dispatch(getDataFromServer())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
