import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Lessons.module.css";
import { getAllTopics } from "../../services/itemsService";

function Lessons() {
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
    <Container>
      <Row className={`${styles.lessons} justify-content-center`}>
        <Col>
          <h1>Lessons</h1>
        </Col>
      </Row>
      <Row className={`${styles.lessons} justify-content-center`}>
        {topics.map((topic) => {
          return (
            <Col md={4} className={styles.column} onClick={() => handleTopicClick(topic._id)}>
              <h3>{capitalize(topic._id)}</h3>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Lessons;
