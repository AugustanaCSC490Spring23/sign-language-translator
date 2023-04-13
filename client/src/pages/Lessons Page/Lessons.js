import React from 'react';
import "./Lessons.css";
import CusButton from "../../Component/CusButton";
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

const Lessons = () => {
    const now = 60;

    return (
        <Container fluid className="lessons-container">
            <Row className="lessons-top-page">
                <Col className="lessons-welcome" md={{ span: 3, offset: 4 }}>
                    <h4>Hi Henry!</h4>
                    <p>Welcome back<br></br>
                        to my class
                    </p>
                </Col>
                <Col className="lessons-card-locate" md={{ span: 3 }}>
                    <Card className="lessons-card">
                        <Card.Body>
                            <h4>Lesson 2</h4>
                            <p>Hello and welcome!</p>
                            <Row>
                                <Col md={{ span: 8, offset: 2 }}>
                                    <CusButton
                                        bgcolor="#3B1404"
                                        color="#F8E5DA"
                                        radius="25"
                                        title="Continue"
                                        weight="750" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <h3>Lesson 1: Family</h3>
                <ProgressBar now={now} label={`${now}%`} />
            </Row>
        </Container>
    )
}

export default Lessons;