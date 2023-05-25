import {Container, ListGroup, Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';

import styles from "./Quiz.module.css";

const Quiz = () => {
    return (
            <Card className={styles.card}>
                <Card.Body>
                    <Row>
                        <Col xs={4} style={{borderRight: "1px solid rgba(0,0,0,0.2)"}}>
                            Question
                        </Col>

                        <Col xs>
                            Answer
                        </Col>
                    </Row>
                </Card.Body>
            </Card>           
    )
}

export default Quiz;