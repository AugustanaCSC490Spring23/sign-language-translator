import { Container, Button, Card, Col } from "react-bootstrap";
import styles from "./QuizDashboard.module.css";
import CardList from "../../Component/CardList";

const QuizDashboardPage = () => {
  const quizzes = [
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello hello hello hello hello hello hello hello hello hello",
      dateTaken: "May 25",
      score: "100%",
      isCompleted: false
    },
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello",
      dateTaken: "May 25",
      score: "100%",
      isCompleted: true
    },
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello",
      dateTaken: "May 25",
      score: "100%",
      isCompleted: false
    },
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello",
      dateTaken: "May 25",
      score: "100%",
      isCompleted: true
    },
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello",
      dateTaken: "May 25",
      score: "100%",
      isCompleted: false
    },
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello",
      dateTaken: "May 25",
      score: "100%",
      isCompleted: true
    },
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello",
      dateTaken: "May 25",
      score: "100%",
      isCompleted: true
    },
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello",
      dateTaken: "May 25",
      score: "100%",
      isCompleted: true
    },
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello",
      dateTaken: "May 25",
      score: "100%",
      isCompleted: true
    },
        
  ]
  
  return (
    <Container>
      <h2 style={{ marginTop: "3rem", height: "4rem" }}>Your Most Recent Test Results</h2>
      <CardList quizzes={quizzes} />

      <Col className={styles.container}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title>
              <h2 style={{ marginTop: "3rem", height: "4rem"  }}>Challenge with a New Test ?</h2>
            </Card.Title>
            <Button variant="danger" href="/">Let's go!</Button>
          </Card.Body>
        </Card>
      </Col>     
    </Container>
  )
};

export default QuizDashboardPage;
