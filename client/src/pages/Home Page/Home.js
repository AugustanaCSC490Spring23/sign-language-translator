import React from "react";
import "./Home.css";
import CusButton from "../../Component/CusButton";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row>
        <Col
          className="style-title-upper"
          md={{ span: 8, offset: 1 }}
        >
          SIGN LANGUAGE
        </Col>
      </Row>
      <Row>
        <Col
          className="style-title-lower"
          md={{ span: 2, offset: 1 }}
        >
          TRANSLATOR
        </Col>
      </Row>
      <Row className="position-small-content">
        <Col
          className="style-small-content"
          md={{ span: 3, offset: 1 }}
        >
          <h4>Hello!</h4>
          <p>
            Want to start learning Sign<br></br>
            Laguage for free?
          </p>
        </Col>
        <Col md={{ span: 2 }}>
          <CusButton
            bgcolor="#3B1404"
            color="#F8E5DA"
            radius="25"
            title="More"
            weight="750"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
