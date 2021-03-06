import React from "react";
import Sidebarcontentcontactus from "./Sidebarcontentcontactus";
import Centercontentcontactus from "./Centercontentcontactus";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact">
      <div className="heading">
        <h1>Get in touch with us</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentcontactus />
        <Centercontentcontactus />
      </div>
    </div>
  );
}
