import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./footer.css";

const COURSES = [
  {
    display: "Lập trình Front End",
    url: "#",
  },
  {
    display: "Lập trình ReactJS",
    url: "#",
  },
  {
    display: "Lập trình Back End",
    url: "#",
  },
  {
    display: "Lập trình Di Động React Native",
    url: "#",
  },
];

const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];

const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Our Team",
    url: "#",
  },
  {
    display: "Contact us",
    url: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-fire-fill"></i>
                </span>
                Elearning
              </h2>
              <p>Address: Cybersoft Elearning Su Van Hanh, Ho Chi Minh City </p>
              <p>Hotline: 0123456789</p>
              <p>Email: info@email.com</p>
            </div>
          </Col>
          <Col lg="2" md="6" sm="6">
            <h5>Courses</h5>
            <ListGroup className="list__group">
              {COURSES.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="2" md="6" sm="6">
            <h5>Resources</h5>
            <ListGroup className="list__group">
              {RESOURCES.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="2" md="6" sm="6">
            <h5>Company</h5>
            <ListGroup className="list__group">
              {COMPANY.map((item, index) => {
                return (
                  <ListGroupItem key={index} className="list__item">
                    <Link to={item.url}>{item.display}</Link>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col lg="3" md="6" sm="6">
            <h5>Email</h5>
            <input type="text" className="email" placeholder="Email" />
            <div className="social__links d-flex gap-3 align-items-center ">
              <span>
                <Link to="#">
                  <i className="ri-facebook-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-twitter-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-telegram-line"></i>
                </Link>
              </span>
              <span>
                <Link to="#">
                  <i className="ri-discord-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
