import React from "react";
import "./Contact.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-body">
          <div className="login-box">
            <h2>Contact</h2>
            <form>
              <div className="user-box">
                <input type="name" name="" required="" />
                <label>Name</label>
              </div>
              <div className="user-box">
                <input type="topic" name="" required="" />
                <label>Topic</label>
              </div>
              <div className="user-box">
                <input type="email" name="" required="" />
                <label>Email</label>
              </div>
              <div className="user-box">
                <p className="message-box">Message</p>
                <Form.Control
                  as="textarea"
                  name=""
                  rows={3}
                  required=""
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.769)",
                    color: "#FFF",
                  }}
                />
              </div>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
