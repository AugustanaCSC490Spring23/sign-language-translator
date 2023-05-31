import { Button, Col, Row, Card } from "react-bootstrap";
import styles from "./MyCard.module.css";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const MyCard = ({ quiz }) => {
  const {
    title,
    topic,
    qualifyFor,
    dateTaken,
    score,
    isCompleted,
    _id,
  } = quiz;

  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(`result/${_id}`);
  };

  return (
    <Col xs>
      <Card className={styles.card}>
        <Card.Body>
          <Card.Title>
            <div style={{fontWeight: "800"}}>{title}</div>
          </Card.Title>
          <Card.Text>
            <div>topic: <span style={{fontWeight: "800"}}>{topic === undefined ? "N/A" : `${topic}`}</span></div>          
          </Card.Text>

          {/* <Card.Text className={styles.qualifyFor}>
            <div>test purpose: <span style={{textDecoration: "none"}}>{`${qualifyFor.slice(0, 80)} ...`}</span></div>          
          </Card.Text> */}
          
          <div className={styles.tagList}>
            {isCompleted ? (
              <Row>
                <Col>
                  <Card.Text className={styles.isCompleted}>
                    Completed
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className={styles.score}>
                    Score: {score}
                  </Card.Text>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col>
                  <Card.Text className={styles.isCompleted}>
                    Incompleted
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text className={styles.score}>
                    Score: N/A
                  </Card.Text>
                </Col>
              </Row>
            )}
          </div>
          <Button variant="dark" onClick={handleBtnClick}>
            Review test
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MyCard;

// <Card.Title>{title}</Card.Title>
//                     <Card.Text>
//                         {description}
//                     </Card.Text>
//                     <Button variant="primary" href={url}>Let's go!</Button>
