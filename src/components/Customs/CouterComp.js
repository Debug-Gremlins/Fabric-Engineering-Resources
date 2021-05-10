import React from "react";

function CouterComp(props) {
  return (
    <div>
      <div className="card">
        <h1>{props.title}</h1>
        <h2 className="count">{props.num}</h2>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default CouterComp;
