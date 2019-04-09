import React from 'react';
import {connect} from 'react-redux';

const Typed = (props)=>(<p>Typed: {props.words}</p >)


const mapStateToProps =(state)=>({
    words: state.appReducer.words
})

export default connect(mapStateToProps, null)(Typed);
