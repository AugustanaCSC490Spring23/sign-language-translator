import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import avatar from "../../assets/Viet-ava.png";
import { Row, Col, Container, Card, Image, Button } from "react-bootstrap";
import ImageSlider from "../../Component/Slider";

function Profile() {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate("/flashcards");
  };

  return (
    <Container fluid className={styles.profileContainer}>
      <Row style={{ paddingTop: "1.5em" }}>
        <Col md={{ span: 3 }}>
          <Image src={avatar} fluid className={styles.profilePicture} />
          <Col className={styles.profileDetails} md={{ span: 9, offset: 3 }}>
            <h2 style={{ height: "2.5rem", justifyContent: "start", display: "flex" }}>Viet Nguyen</h2>
            <p style={{ justifyContent: "start", display: "flex" }}><b>vietnguyen@gmail.com</b></p>
          </Col>
        </Col>
        <Col className={styles.profileDetails} md={{ span: 8, offset: 1 }} style={{ paddingRight: "2em" }}>
          <h2 style={{ height: "3.5rem", justifyContent: "start", display: "flex" }}>ACHIEVEMENTS!!</h2>
          <ImageSlider />
          <hr
            style={{
              background: "black",
              color: "black",
              height: "3px",
              border: "none",
            }}
          />
          <h2 style={{ height: "3.5rem", justifyContent: "start", display: "flex" }}>FLASHCARDS</h2>

          <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "2em" }}>
            <Card className={styles.profileFlashcard} onClick={handleSeeMoreClick} style={{ flex: 1 }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            <Card className={styles.profileFlashcard} onClick={handleSeeMoreClick} style={{ flex: 1 }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            <Card className={styles.profileFlashcard} onClick={handleSeeMoreClick} style={{ flex: 1 }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            <Card className={styles.profileFlashcard} onClick={handleSeeMoreClick} style={{ flex: 1 }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
            <Card className={styles.profileFlashcard} onClick={handleSeeMoreClick} style={{ flex: 1 }}>
              <Card.Body>
                <Card.Title>See More</Card.Title>
              </Card.Body>
            </Card>
          </div>

        </Col>

      </Row >

    </Container >

  );
}


export default Profile;