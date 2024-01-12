import React from "react";

function PortfolioCard(props) {
  return (
    <div className="card">
      <div className="card-top">
        <a className="card-name" href={props.websiteLink}>{props.projectName}</a>
      </div>
      <div className="card-bottom">
        <p className="card-info">{props.affiliatedOrganization}</p>
        <p className="card-info">{props.date}</p>
        <p className="card-info">{props.description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;