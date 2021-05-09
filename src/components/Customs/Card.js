import React from "react";

function Cardprop(props) {
  return (
    <div>
      <div className="card">
        <div className="section-title">
          <h1>{props.cardTitle}</h1>
          <div className="btn">
            <a
              href="https://drive.google.com/drive/folders/1-e1yNWk6uSCJzgxruVZs9Iouh03nBodk"
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.cardLink}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardprop;
