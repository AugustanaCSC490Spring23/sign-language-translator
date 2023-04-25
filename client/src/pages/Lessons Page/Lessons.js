import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ProgressBar,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Lessons.module.css";
import { getAllTopics } from "../../services/itemsService";
import CusButton from "../../Component/CusButton";

const Lessons = () => {
  const now = 60;
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllTopics().then((res) => {
      setTopics(res.data.data.topics);
    });
  }, []);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function handleTopicClick(topicId) {
    navigate(`/learning/lessons/${topicId}`);
  }
  return (
    <Container fluid className={styles.lessonsContainer}>
      <Row className={styles.lessonsTopPage}>
        <Col
          className={styles.lessonsWelcome}
          md={{ span: 3, offset: 4 }}
        >
          <h4>Hi Henry!</h4>
          <p>
            Welcome back<br></br>
            to my class
          </p>
        </Col>
        <Col className={styles.lessonsCardLocate} md={{ span: 3 }}>
          <Card className={styles.lessonsCard}>
            <Card.Body>
              <h4>Lesson 2</h4>
              <p>Hello and welcome!</p>
              <Row>
                <Col md={{ span: 8, offset: 2 }}>
                  <CusButton
                    bgcolor="#3B1404"
                    color="#F8E5DA"
                    radius="25"
                    title="Continue"
                    weight="750"
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <h3>Lesson 1: Family</h3>
        <ProgressBar now={now} label={`${now}%`} />
      </Row>
      {topics.map((topic) => {
        return (
          <Row
            onClick={() => handleTopicClick(topic._id)}
          >
            <h3>{capitalize(topic._id)}</h3>
            <ProgressBar now={now} label={`${now}%`} />
          </Row>
        );
      })}
    </Container>
  );
};

export default Lessons;
