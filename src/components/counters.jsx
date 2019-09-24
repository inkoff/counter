import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters render");

    const { counters, Reset, Delete, Increment, Decrement } = this.props;
    return (
      <div>
        <button onClick={Reset} className="btn btn-primary btn-sm md-4">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            Increment={Increment}
            Decrement={Decrement}
            Delete={Delete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
