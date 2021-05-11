import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.routeTitle}</h2>
        <img src={this.props.routeImg} alt="" srcSet />
      </div>
    );
  }
}

export default Card;
