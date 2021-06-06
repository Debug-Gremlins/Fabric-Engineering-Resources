import React, { Component } from "react";

export class ScreenCardI extends Component {
  render() {
    return (
      <>
        <div className="row justify-content-center align-items-center">
          <div className="card col-lg-6 col-md-6 col-sm-12">
            <img
              className="effect1 w-100"
              src={this.props.imgPath}
              alt="dataImg"
              srcSet
            />
          </div>
          <div className="card content col-lg-4 col-md-5 col-sm-12">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ScreenCardI;
