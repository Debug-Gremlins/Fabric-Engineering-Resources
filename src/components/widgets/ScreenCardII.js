import React, { Component } from "react";

export class ScreenCardII extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center align-items-center">
          <div className="card content col-lg-4 col-md-5 col-sm-12">
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
          </div>
          <div className="card col-lg-6 col-md-6 col-sm-12">
            <img
              src={this.props.imgPath}
              alt="dataImg"
              srcSet
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenCardII;

// const Effect2 = styled.div`
//   animation: zoominoutsinglefeatured 1s infinite;
//   @keyframes zoominoutsinglefeatured {
//     0% {
//       transform: scale(1, 1);
//     }
//     50% {
//       transform: scale(1.2, 1.2);
//     }
//     100% {
//       transform: scale(1, 1);
//     }
//   }
// `;
