import React, { useState } from "react";

function ContactComponent() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    alert(`My name is - ${data.fullname}, e-mail - is ${data.email}`);
  };

  const changeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container container_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmitHandler}>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1">Full name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={changeHandler}
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput2">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput2"
                  name="email"
                  value={data.email}
                  onChange={changeHandler}
                  placeholder="name@example.com"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput3">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput3"
                  name="phone"
                  value={data.phone}
                  onChange={changeHandler}
                  placeholder="Mobile number"
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={changeHandler}
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
