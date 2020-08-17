import React from "react";
import { NavLink } from "react-router-dom";

function CardComponent({ imgSrc, title }) {
  return (
    <div className="col-md-4 col-10 mx-auto">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{title}</h5>
          <p className="card-text">
            Learn {title} from scratch, Basic, Intermediate & Advance concepts.
          </p>
          <NavLink to="#" className="btn btn-primary">
            Start the course
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
