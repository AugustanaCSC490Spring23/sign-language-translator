import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";
import vietNguyen from "../../assets/viet-nguyen.jpg";
import huyNguyen from "../../assets/huy-ngyen.jpg";
import samuelTklemariam from "../../assets/samuel-teklemariam.jpg";
import azeeNguyen from "../../assets/azee-nguyen.jpg";
import {
  Row,
  Col,
  Container,
  Card,
  Image,
  Button,
} from "react-bootstrap";

function About() {
  return (
    <Container fluid className={styles.aboutContainer}>
      <Row style={{ paddingTop: "1.5em" }}>
        <Col md={{ span: 3, offset: 2 }}>
          <Card style={{ marginBottom: "2em" }}>
            <Card.Body>
              <Card.Text
                style={{ marginBottom: "0.5em" }}
                className={styles.aboutText}
              >
                learn more
              </Card.Text>
              <Card.Title className={styles.aboutTitle}>
                About Us
              </Card.Title>
              <Card.Text className={styles.aboutText}>
                Welcome to our sign language learning website! Our
                team is comprised of passionate educators and language
                experts who are committed to making sign language
                accessible and engaging for learners of all levels.
              </Card.Text>
              <Card.Text className={styles.aboutText}>
                Whether you are a beginner or looking to improve your
                skills, we are here to help you achieve your goals and
                develop a deeper understanding of this beautiful and
                expressive language. Join us on this journey
                oflearning and discovery, and let's communicate in a
                whole new way!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <h1 style={{ color: "#F0E7DE" }}>Our Team</h1>
        </Col>
      </Row>
      <Row
        style={{
          maxWidth: "95%",
          marginLeft: "2.5%",
          marginRight: "2.5%",
        }}
      >
        <div className={styles.membersBox}>
          <Row>
            <Col md={{ span: 3 }} className={styles.imageCol}>
              <div className={styles.imageBack}>
                <Image
                  src={vietNguyen}
                  className={styles.memberImage}
                />
              </div>
              <p>Viet Nguyen</p>
              <p>Major: Computer Science</p>
            </Col>
            <Col md={{ span: 3 }} className={styles.imageCol}>
              <div className={styles.imageBack}>
                <Image
                  src={huyNguyen}
                  className={styles.memberImage}
                />
              </div>
              <p>Huy Nguyen</p>
              <p>Major: Computer Science</p>
            </Col>
            <Col md={{ span: 3 }} className={styles.imageCol}>
              <div className={styles.imageBack}>
                <Image
                  src={samuelTklemariam}
                  className={styles.memberImage}
                />
              </div>
              <p>Samuel Teklemariam</p>
              <p>Major: Computer Science</p>
            </Col>
            <Col md={{ span: 3 }} className={styles.imageCol}>
              <div className={styles.imageBack}>
                <Image
                  src={azeeNguyen}
                  className={styles.memberImage}
                />
              </div>
              <p>Azee Nguyen</p>
              <p>Major: Computer Science</p>
            </Col>
          </Row>
        </div>
      </Row>
    </Container>
  );
}

export default About;
