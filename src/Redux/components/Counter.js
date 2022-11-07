import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div className="counter" >
    <button
      className="counter-action decrement"
      onClick={() => props.updatePlayerScore(props.index, -1)}>
      -
    </button>
    <div className="counter-score"> {props.score} </div>
    <button
      className="counter-action increment"
      onClick={() => props.updatePlayerScore(props.index, 1)}>
      +
    </button>
  </div>);

  Counter.propTypes = {
      updatePlayerScore: PropTypes.func.isRequired,
      index: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired
  };

export default Counter;

// class Counter extends Component {
//   state = {

//   }

//   handleInc = () => {
//       this.props.onInc(2);
//   }

//   render() {
//       return (
//           <>
//               {this.props.counter}
//               <button onClick={this.handleInc}>Increment</button>
//           </>
//       )
//   }
// }

// class CounterDec extends Component {

//   handleDec = () => {
//       this.props.onDec(1);
//   }

//   render() {
//       return (
//           <>
//               <button onClick={this.handleDec}>Decrement</button>
//           </>
//       )
//   }
// }