import React, { useState, useRef } from "react";
import "../css/ContactForm.css";
import { Link } from "react-router-dom";
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);

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
    firstInput.current.value = "";
    secondInput.current.value = "";
    thirdInput.current.value = "";
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
                    ref={firstInput}
                    type="text"
                    id="name"
                    className="app-form-control"
                    placeholder="NAME"
                    required
                  />
                </div>
                <div className="app-form-group">
                  <input
                    ref={secondInput}
                    type="email"
                    id="email"
                    className="app-form-control"
                    placeholder="EMAIL"
                    required
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    ref={thirdInput}
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
        <div className="box-2">
          <div className="btn btn-two">
            <Link
              className="ml-2 text-[#a8a9b5] hover:text-white-900 font-opensans text-md font-normal cursor-pointer"
              to="/"
            >
              Back to HOMEPAGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
