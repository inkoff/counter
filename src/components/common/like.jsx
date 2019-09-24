import React, { Component } from "react";
class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.like) classes += "-o";
    return (
      <i onClick={this.props.Like} className={classes} aria-hidden="true"></i>
    );
  }
}

export default Like;
