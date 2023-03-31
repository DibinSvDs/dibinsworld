import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import FetchQuote from "./quotefetch";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dibin Sivadas </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I am an aspiring Data Scientist with a freshly cooked Masters in Data Science from 
            Amrita School Of Engineering, Bengaluru
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football or Swimming 
            </li>
            <li className="about-activity">
              <ImPointRight /> Making EDM Music or something creative
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          
          <p style={{ color: "rgb(155 126 172)" }}>
           <FetchQuote/>
          </p>
          <footer className="blockquote-footer">Daily quote from theysaidso.com</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
