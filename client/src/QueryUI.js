import React from 'react';
import { connect } from 'react-redux'
import simpleAction from './actions/simpleAction';


const QueryUI = (props) => {
  console.log(props);

  return (
    <div>Hello Query UI</div>
  );
};

const mapStateToProps = state => ({
  queryUI: state.queryUIReducer,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(QueryUI);