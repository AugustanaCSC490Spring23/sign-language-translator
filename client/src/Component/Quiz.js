import {Container, ListGroup} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import styles from "./Quiz.module.css";

const Quiz = () => {
    return (
        <Container>
            <h2>Quiz</h2>
            <Card className={styles.card}>
                <Card.Body>
                    <Card.Title>Question 1: What is dis ?</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Answer 1</ListGroup.Item>
                        <ListGroup.Item>Answer 2</ListGroup.Item>
                        <ListGroup.Item>Answer 3</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Quiz;