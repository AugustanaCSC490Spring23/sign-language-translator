import React from 'react';
import "./WordDetails.css";
import CusButton from "../../Component/CusButton";
import WordCard from "../../Component/WordCard.js";
import { useEffect, useState } from "react";
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";

const WordDetails = () => {
    const { text } = useParams();
    useEffect(() => {

    }, [text]);
    return (
        <Container fluid className="word-details-container">
            <Row>
                <Col className="main-word-details" md={{ span: 6, offset: 1 }}>
                    {text}
                </Col>
                <Col>
                    <Card
                        style={{
                            width: "6cm",
                            height: "6cm",
                            borderRadius: "10px",
                            border: "solid 1px #dcdcdc",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Card.Img
                            variant="top"
                            src={text.meaningPhoto}
                            style={{
                                width: "4.25cm",
                                height: "4.25cm",
                                borderRadius: "10px",
                            }}
                        />
                    </Card>
                </Col>
                <Col className="next-button" md={{ span: 2 }}>
                    <CusButton
                        bgcolor="#3B1404"
                        color="#F8E5DA"
                        radius="25"
                        title="Next word"
                        weight="750" />
                </Col>
            </Row>
            <Row>
                <Col className="details-word-details" md={{ span: 4, offset: 1 }}>
                    When bolding text, its considered a best practice to use the strong tag.
                    This is because it is a semantic element, whereas b is not.
                    Non-semantic elements are worse for accessibility and can make content localization and future-proofing difficult.
                    Additionally, if the text bolding is purely stylistic, its better to use CSS and keep all page styling separate from the content.
                </Col>
            </Row>

        </Container>
    )
}

export default WordDetails;