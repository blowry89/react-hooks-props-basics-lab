import React from "react";
import Links from "./Links";

//passed down from App.js 
function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
       /*conditional rendereing*/
      {!bio || bio === "" ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin}></Links>
    </div>
  );
}

export default About;
