import React, { Component } from "react";

export class NoticeCard extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center align-items-center">
          {/* <div className="card col-lg-6 col-md-6 col-sm-12">
            <h1>{this.props.examTitle}</h1>
            <p>{this.props.examSubTitle}</p>
          </div> */}
          <div className="card col-lg-8 col-md-12 col-sm-12">
            <h1>{this.props.title}</h1>
            <p>{this.props.mcq}</p>
            <p>{this.props.written}</p>
            <img
              className="noticeImg "
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

export default NoticeCard;
