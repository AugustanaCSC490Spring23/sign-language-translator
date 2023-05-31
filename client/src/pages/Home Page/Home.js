import React from "react";
import styles from "./Home.module.css";
import CusButton from "../../Component/CusButton";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className={styles.homeContainer}>
      <Row>
        <Col
          className={styles.styleTitleUpper}
          md={{ span: 8, offset: 1 }}
        >
          SIGN LANGUAGE
        </Col>
      </Row>
      <Row>
        <Col
          className={styles.styleTitleUpper}
          md={{ span: 2, offset: 1 }}
        >
          TRANSLATOR
        </Col>
      </Row>
      <Row className={styles.positionSmallContent}>
        <Col
          className={styles.positionSmallContent}
          md={{ span: 3, offset: 1 }}
        >
          <h4 style={{ fontSize: "2em" }}>Hello!</h4>
          <p style={{ fontSize: "1.5em" }}>
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
            width="100%"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
