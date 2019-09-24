import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
  }
  componentWillUnmount() {
    console.log("Unmount");
  }
  render() {
    console.log("Counter render");

    const { counter, Increment, Delete, Decrement } = this.props;
    return (
      <div className="row">
        <div className="col-1 mr-3">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div>
          <button
            onClick={() => Increment(counter)}
            className="btn btn-secondary btn-sm m-1"
          >
            Increment
          </button>
          <button
            onClick={() => Decrement(counter)}
            className="btn btn-secondary btn-sm m-1"
            disabled={counter.value === 0 ? true : false}
          >
            Decrement
          </button>
          <button
            onClick={() => Delete(counter.id)}
            className="btn btn-danger btn-sm m-1"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: v } = this.props.counter;
    return v === 0 ? "Zero" : v;
  }
}

export default Counter;
