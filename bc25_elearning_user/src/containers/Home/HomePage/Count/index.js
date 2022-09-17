import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import "./count.css";
import ScrollTrigger from "react-scroll-trigger";

const COUNT = [
  {
    display: "Bài học",
    num: "30",
    url: "/",
  },
  {
    display: "Học viên",
    num: "999",
    url: "/",
  },
  {
    display: "Đối tác",
    num: "70",
    url: "/",
  },
];

const Count = () => {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <section className="count">
        <Container>
          <Row>
            <Col
              lg="12"
              md="12"
              sm="12"
              className="mb-4 d-flex justify-content-center"
            >
              {COUNT.map((item, index) => (
                <div className="count__content" key={index}>
                  <div className="count__item">
                    <p>
                      {counter && (
                        <CountUp
                          className="counter"
                          start={0}
                          end={item.num}
                          duration={2}
                          delay={0}
                        />
                      )}
                    </p>
                    <p>{item.display} </p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </ScrollTrigger>
  );
};

export default Count;
