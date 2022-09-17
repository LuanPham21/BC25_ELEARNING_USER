import React from "react";
import { Container } from "reactstrap";
import "./general-section.css";

const General = ({ title }) => {
  return (
    <section className="general__section">
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

export default General;
