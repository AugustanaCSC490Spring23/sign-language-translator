import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

import requireAuth from "../../hoc/requireAuth";
import userAva from "../../Resources/Images/user-profile-img.png";

import './Profile.css';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Container>
      <Row>
        <Col md={4} className="profile-divider">
          <Card className="profile-card">
            <Image src={user.avatar || `${userAva}`} className="profile-avatar" />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Row className="profile-row">
            <Col>
              <h2>Achievements</h2>
              <div className="profile-images">
                {user.items.map((achievement) => (
                  <Image key={achievement._id} src={achievement.meaningPhoto} />
                ))}
              </div>
            </Col>
          </Row>
          <Row className="profile-row">
            <Col>
              <h2>Flashcards</h2>
              <div className="profile-images">
                {user.items.map((flashcard) => (
                  <Image key={flashcard._id} src={flashcard.meaningPhoto} />
                ))}
              </div>
            </Col>
          </Row>
          <Row className="profile-row">
            <Col>
              <h2>Lessons</h2>
              <div className="profile-images">
                {user.items.map((lesson) => (
                  <Image key={lesson._id} src={lesson.meaningPhoto} />
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default requireAuth(Profile);
