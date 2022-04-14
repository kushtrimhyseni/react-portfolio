import React, { useState } from "react";
import "../pages/ContactForm.css";
import { NavLink } from "react-router-dom";
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="background">
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close"></div>
              <div className="screen-header-button maximize"></div>
              <div className="screen-header-button minimize"></div>
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
              <div className="screen-header-ellipsis"></div>
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO : +49 605-405</div>
            </div>
            <div className="screen-body-item">
              <form className="app-form" onSubmit={handleSubmit}>
                <div className="app-form-group">
                  <input
                    type="text"
                    id="name"
                    className="app-form-control"
                    placeholder="NAME"
                    required
                  />
                </div>
                <div className="app-form-group">
                  <input
                    type="email"
                    id="email"
                    className="app-form-control"
                    placeholder="EMAIL"
                    required
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    id="message"
                    className="app-form-control"
                    placeholder="MESSAGE"
                    required
                  />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button" type="submit">
                    {status}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="box-2">
          <div class="btn btn-two">
            <NavLink
              className="ml-2 text-[#a8a9b5] hover:text-white-900 font-opensans text-md font-normal cursor-pointer"
              to="/"
            >
              Back to HOMEPAGE
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
