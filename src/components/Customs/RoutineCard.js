import React, { Component } from "react";

export class RoutineCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="btn">
          <a
            href={this.props.driveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.command}
          </a>
        </div>
      </div>
    );
  }
}

export default RoutineCard;
