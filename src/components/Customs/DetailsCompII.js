import React from 'react'

function DetailsCompII(props) {
    return (
      <div>
        <div className="row">
          <div className={props.clsName} />
          <div className="details_content col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <h1>{props.detailsTitle}</h1>
            <hr />
            <p>{props.detailsParagraph}</p>
            <div className="pre-con-btn">
              <a
                href="https://www.thomasnet.com/articles/top-suppliers/textile-manufacturing-companies/"
                target="_blank"
                rel="noreferrer"
              >
                {props.detailsBtn}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default DetailsCompII
