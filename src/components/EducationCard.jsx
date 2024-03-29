import React from "react";

function EducationCard(props) {
  return (
    <div className="card">
      <div className="card-top">
        <h2 className="card-name">{props.schoolName}</h2>
        <img className="circle-img" src={props.img} alt="logo image" />
      </div>
      <div className="card-bottom">
        <p className="card-info">{props.time}</p>
        <p className="card-info">{props.degree}</p>
      </div>
    </div>
  );
}

export default EducationCard;
