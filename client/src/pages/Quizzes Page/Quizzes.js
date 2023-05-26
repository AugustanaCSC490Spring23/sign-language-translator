import { useParams } from "react-router-dom";

import { Container, Button, Card, Col, Row, Modal, Image } from "react-bootstrap";
import styles from "./Quizzes.module.css";
import Quiz from "../../Component/Quiz";
import { useEffect, useState } from "react";
import { getTestWithoutAnswers } from "../../services/quizzesService";
import { gradeTest, getTestResult } from "../../services/quizzesService";

const QuizzesPage = () => {
  const [userResponses, setUserResponses] = useState([]);
  const { id } = useParams();
  const [quizList, setQuizList] = useState([]);
  const [test, setTest] = useState({});
  useEffect(() => {
    getTestWithoutAnswers(id).then((res) => {
      setQuizList(res.data.data.test.quizzes);
      setTest(res.data.data.test);
    });
  }, [id]);

  const [score, setScore] = useState(0);
  const handleSubmitTest = () => {
    gradeTest(id, userResponses);
    getTestResult(id).then(res => setScore(res.data.data.test.score));

    setShowModal(true);
  }

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  if (!quizList) return <div>Loading...</div>
  return (
    <Container>
      <Row style={{ margin: "1rem 0" }}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title>
              <h2 style={{ height: "2rem", margin: "0" }}>
                {test.title}
              </h2>
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>

      <Row style={{ margin: "1rem 0" }}>
        {quizList.map((quiz) => (
          <Quiz
            quiz={quiz}
            userResponses={userResponses}
            setUserResponses={setUserResponses}
          />
        ))}
      </Row>

      <Button variant="secondary" type="submit" onClick={handleSubmitTest} style={{marginBottom: "2rem"}}>Submit</Button>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations!</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
          <div style={{textAlign: "center"}}>You've achieved a grade of</div>
          <h1 style={{textAlign: "center", fontSize: "4em"}}>{score}</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" href="/quizzes">
            Return to Dashboard
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default QuizzesPage;
