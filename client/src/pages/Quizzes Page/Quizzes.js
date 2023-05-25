import {useParams} from "react-router-dom";

import { Container, Button, Card, Col, Row } from "react-bootstrap";
import styles from "./Quizzes.module.css";
import Quiz from "../../Component/Quiz";

const QuizzesPage = () => {
  const {id} = useParams();
  return (
    <Container>
      <Row>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Title>
              <h2 style={{ height: "2rem", margin: "0" }}>Test {id}</h2>
            </Card.Title>
          </Card.Body>
        </Card>
      </Row>

      <Row>
        <Quiz />  
      </Row>
       
    </Container>
  )
};

export default QuizzesPage;
