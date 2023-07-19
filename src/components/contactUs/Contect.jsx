import React from "react";
import "./contect.scss";
import { AiOutlineMail } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
function Contect() {
  return (
    <div className="contact">
      <div className="left">
        <h1>Talk me</h1>
        <div className="subContainer">
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <AiOutlineMail className="icon" />
            <span>Email</span>
            <span>Hussein@gmail.com</span>
          </div>
          <span className="write">write me</span>
        </div>
        <div className="subContainer">
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <AiOutlineMail className="icon" />
            <span>Email</span>
            <span>Hussein@gmail.com</span>
          </div>
          <span className="write">write me</span>
        </div>
        <div className="subContainer">
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <AiOutlineMail className="icon" />
            <span>Email</span>
            <span>Hussein@gmail.com</span>
          </div>
          <span className="write">write me</span>
        </div>
      </div>
      <div className="right">
        <h1>Write me Your Project</h1>
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" className="input" placeholder="enter your name" />
            <label htmlFor="">Email</label>
            <input type="text" className="input" placeholder="enter your name" />
            <label htmlFor="">Project</label>
<textarea  placeholder="plase write something.."  name="" id="textarea" cols="30" rows="12"></textarea>
<div className="button">
<span>Send Message</span>
<SiMinutemailer className="icon"/>
</div>
        </form>
      </div>
    </div>
  );
}

export default Contect;
