import React from "react";

function EducationCard(props) {
  return (
    <div className="education-card">
      <div className="education-card-top">
        <h2 className="education-card-name">{props.schoolName}</h2>
        <img className="circle-img" src={props.img} alt="logo image" />
      </div>
      <div className="education-card-bottom">
        <p className="education-card-info">{props.time}</p>
        <p className="education-card-info">{props.degree}</p>
      </div>
    </div>
  );
}

export default EducationCard;
