import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";
import "./styles.css";
import "./responsive.css";

class Content extends Component {
  render() {
    return (
      <div className="content">
        <h2 className="text-center">About Us</h2>
        {/* <Row className="d-flex justify-content-between">
          {contentData.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <h6 className="mb-3">
                <a href={col.link}>
                  <FontAwesomeIcon icon="link" className="mr-2" />
                  {col.title}
                </a>
              </h6>
              <p>{col.description}</p>
            </Col>
          ))}
        </Row> */}
        <div className="aboutus">
            DonateEase aims to make crowdfunding a tap away. A hassle free approach, to all your problems. Feel free to donate to noble causes by searching for crowdfunding going on near you. All of the profiles are verified. Need to be crowdfunded? Get crowdfunded now, just a click away !

        </div>
      </div>
    );
  }
}

export default Content;
