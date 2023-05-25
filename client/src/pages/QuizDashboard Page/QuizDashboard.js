import { Container, Row } from "react-bootstrap";
import styles from "./QuizDashboard.module.css";
import CardList from "../../Component/CardList";

const QuizDashboardPage = () => {
  const quizzes = [
    {
      title: "Dis is quiz 1",
      topic: "quiz nek",
      qualifyFor: "dis is der quiz we gonna learn about hello hello hello hello hello hello",
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
      <CardList quizzes={quizzes} />


    </Container>
  )
};

export default QuizDashboardPage;
