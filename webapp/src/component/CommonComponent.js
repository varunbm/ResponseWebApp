import React from "react";
import img from "../images/img1.jpg";
import { NavLink } from "react-router-dom";

function CommonComponent({ home, visit }) {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-contnet-center flex-column">
                  <h1 className="mt-40">
                    {home && "Learn with "}
                    {!home && "About "}
                    <strong className="brand-name">ModalaCode</strong>
                  </h1>
                  <p className="my-1">
                    {home &&
                      `Let's take the first step towards coding together.`}
                  </p>
                  <div className="mt-3">
                    <NavLink to={visit} className="btn-get-started ">
                      {home && `Get Started`}
                      {!home && `Contact`}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={img}
                    className="img-fluid animated"
                    alt="home page img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CommonComponent;
