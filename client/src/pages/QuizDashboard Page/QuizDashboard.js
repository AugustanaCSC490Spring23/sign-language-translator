import {
  Container,
  Button,
  Card,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import styles from "./QuizDashboard.module.css";
import CardList from "../../Component/CardList";
import { useEffect, useState } from "react";
import {
  getAllTestsWithBasicInfo,
  createTest,
} from "../../services/quizzesService";
import { getAllTopics } from "../../services/itemsService";
import { useNavigate } from "react-router-dom";

const QuizDashboardPage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [topicList, setTopicList] = useState([]);
  const [testQueries, setTestQueries] = useState({
    numQuizzes: 3,
    difficulty: null,
    topic: null,
    category: null,
    specialPool: null,
    title: null,
    qualifyFor: "Testing",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getAllTestsWithBasicInfo().then((response) => {
      setQuizzes(response.data.data.tests);
    });
    getAllTopics().then((res) => {
      setTopicList(res.data.data.topics.map((topic) => topic._id));
    });
  }, [navigate]);

  const handleCreateTest = () => {
    console.log(testQueries);
    createTest(testQueries)
      .then((res) => {
        navigate(res.data.data.testId);
      })
      .catch((error) => {
        // Handle error here
        console.log(error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleTopicChange = (e) => {
    const { value } = e.target;
    const topic = value !== "" ? value : null;
    const title =
      topic !== null && topic !== undefined ? `Test on: ${topic}` : "General test";
    setTestQueries((prevQueries) => ({
      ...prevQueries,
      topic,
      title,
    }));
  };

  const handleDifficultyChange = (e) => {
    const { value } = e.target;
    const difficulty = value !== "" ? value : null;
    setTestQueries((prevQueries) => ({
      ...prevQueries,
      difficulty,
    }));
  };

  return (
    <Container>
      <h2 style={{ marginTop: "3rem", height: "4rem" }}>
        Your Most Recent Test Results
      </h2>
      <CardList quizzes={quizzes} />

      <Col className={styles.container}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title>
              <h2 style={{ marginTop: "3rem", height: "4rem" }}>
                Challenge with a New Test ?
              </h2>
            </Card.Title>
            <Button variant="danger" onClick={handleOpenModal}>
              Let's go!
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="difficulty">
              <Form.Label>Difficulty</Form.Label>
              <Form.Control
                as="select"
                name="
                difficulty"
                value={
                  testQueries.difficulty !== null
                    ? testQueries.difficulty
                    : ""
                }
                onChange={handleDifficultyChange}
              >
                <option value={null}></option>
                <option value={1}>Easy</option>
                <option value={2}>Medium</option>
                <option value={3}>Hard</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="topic">
              <Form.Label>Topic</Form.Label>
              <Form.Control
                as="select"
                name="topic"
                value={
                  testQueries.topic !== null ? testQueries.topic : ""
                }
                onChange={handleTopicChange}
              >
                <option value=""></option>
                {topicList.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreateTest}>
            Create Test
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default QuizDashboardPage;
