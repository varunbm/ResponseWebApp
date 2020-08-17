import React from "react";
import CardComponent from "../cardComponent";
import MockData from "../mockData";

function ServiceComponent() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Courses</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {MockData.map((val, i) => (
                <CardComponent imgSrc={val.img} title={val.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceComponent;
