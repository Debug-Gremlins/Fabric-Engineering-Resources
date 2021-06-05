import React, { Component } from "react";

class DetailsCompI extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="details_content col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <h1>{this.props.detailsTitle}</h1>
            <hr />
            <p>{this.props.detailsParagraph}</p>
            <div className="btn">
              <a
                href={this.props.detailsLink}
                target="_blank"
                rel="noreferrer"
              >
                {this.props.detailsBtn}
              </a>
            </div>
          </div>
          <div className={this.props.clsName} />
        </div>
      </div>
    );
  }
}

export default DetailsCompI;
