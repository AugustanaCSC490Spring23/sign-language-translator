import { Container, Row } from "react-bootstrap";
import styles from "./QuizDashboard.module.css";
import CardList from "../../Component/CardList";

const QuizDashboardPage = () => {
  return (
    <Container>
      <CardList cards={[1,2,3,4,5,6,7,8,9,10,11]} />


    </Container>
  )
};

export default QuizDashboardPage;
