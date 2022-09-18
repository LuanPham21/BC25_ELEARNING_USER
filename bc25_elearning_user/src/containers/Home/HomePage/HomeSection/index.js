import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./home-section.css";
import Typewriter from "typewriter-effect";

const HomeSection = () => {
  return (
    <section className="home__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="home__content">
              <h2>
                Lorem ipsum
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("<span>Lorem ipsum</span>")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("<span>Lorem ipsum dolor sit amet</span>")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("<span>Lorem ipsum doir quis quos</span>")
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                />
              </h2>
              <p className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti excepturi omnis neque adipisci sequi ullam unde in
                minus quis quos.
              </p>

              <div className="home__btns d-flex align-items-center gap-4">
                <button className=" explore__btn d-flex align-items-center gap-2">
                  <i className="ri-leaf-line"></i>
                  <Link to="/courses">Xem khoá học</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="home__img">
              <img
                style={{ height: "350px" }}
                src="https://placeimg.com/420/320/tech/grayscale"
                alt="https://placeimg.com/420/320/tech/grayscale"
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeSection;
