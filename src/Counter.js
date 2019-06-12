import React, { Component } from 'react';
import {connect} from 'react-redux';
import { render } from 'react-dom';
class Counter extends React.Component {
  increment=(param)=> {
    console.log('hello');
    this.props.dispatch({ type: param, payload: 1 });
  };
decrement = (param) => {
  console.log('bye');
    this.props.dispatch({ type: param, payload: -1 });
  }
  render() {
    return (
      <div className="Counter">
      <h5>Counter </h5>
        <div>
        <span>{this.props.count1}</span><br></br>
        <button onClick={() => this.decrement('first_decrement')}>-</button>
         <button onClick={()=> this.increment('first_increment')}>+</button><br></br>
         <span>{this.props.count2}</span><br></br>
         <button onClick={() =>this.decrement('second_decrement')}>-</button>
         <button onClick={()=> this.increment('second_increment')}>+</button>
        </div>
      </div>
    );}}
    function mapStateToProps(state) {
  return {
    count1: state.count1,
    count2: state.count2,
  };
  }
export default connect(mapStateToProps)(Counter);