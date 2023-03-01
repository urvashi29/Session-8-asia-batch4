import React, { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";

class CounterTwo extends Component {
  render() {
    console.log(this.props.counter);
    return (
      <div>
        {this.props.counter}
        <button onClick={() => this.props.onInc(2)}>+</button>
        <button onClick={() => this.props.onDec(2)}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInc: (val) => dispatch(increment(val)),
    onDec: (val) => dispatch(decrement(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterTwo);
