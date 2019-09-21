import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    // tags: ["tag1", "tag2", "tag3"]
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Pleas create a new tag"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
