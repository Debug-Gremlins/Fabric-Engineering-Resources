import React, { Component } from "react";

export class ScreenCardI extends Component {
  render() {
    return (
      <>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <img
                className="effect1 w-100"
                src={this.props.imgPath}
                alt="dataImg"
                srcSet
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="card content">
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ScreenCardI;
