import React from "react";
import Contentwearerotarycenter from "./Contentwearerotarycenter";
import Sidebarcontentwearerotary from "./Sidebarcontentwearerotary";
import "./WeareRotary.css";

export default function Wearerotary() {
  return (
    <div className="rotary">
      <div className="heading">
        <h1>WELCOME TO ROTARY</h1>
      </div>
      <div className="content__body">
        <Sidebarcontentwearerotary />
        <Contentwearerotarycenter />
      </div>
    </div>
  );
}
