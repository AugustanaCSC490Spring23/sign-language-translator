import {
  Container,
  Row,
  Col,
  Form,
  Image,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useState } from "react";

import styles from "./Quiz.module.css";

const Quiz = ({ quiz, userResponses, setUserResponses, viewTest }) => {
  const {
    _id: quizId,
    quizType,
    keys,
    topic,
    question,
    choices,
    displayChoices,
    correctAnswer
  } = quiz;

  console.log(quiz);


  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleAnswerSelection = (answerId) => {
    setSelectedAnswer(answerId);

    const response = {
      quizId,
      answerId: answerId || "",
    };

    setUserResponses((prevResponses) => {
      const updatedResponses = prevResponses.map((res) => {
        if (res.quizId === quizId) {
          return { ...response, answerId };
        }
        return res;
      });
  
      if (!updatedResponses.some((response) => response.quizId === quizId)) {
        updatedResponses.push(response);
      }
  
      console.log(updatedResponses); // Log the updated responses
  
      return updatedResponses;
    });
  }

  return (
    <Card className={styles.card}>
      <Card.Body>
        <Container>
          <Row>
            <Col
              xs={4}
              style={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}
            >
              <Row
                style={{
                  fontWeight: "700",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                <div>{question}</div>
              </Row>
              <Row>
                {quizType === "a" ? (
                  <div style={{ fontWeight: "700", fontSize: "2em" }}>
                    {keys[0]}
                  </div>
                ) : (
                  keys.map((key) => (
                    <Image
                      src={key[1]}
                      className={styles.img}
                      alt="Image"
                      style={{ width: "10rem", height: "auto" }}
                    />
                  ))
                )}
              </Row>
            </Col>

            <Col xs>
              {viewTest ? <Form>
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      name="0"
                      id="radio-0"
                      checked={choices[0].text === correctAnswer.text}
                      label={quizType === "a" ? (
                        <Image
                          src={displayChoices[0]}
                          className={styles.img}
                          alt="Image"
                          style={{
                            width: "10rem",
                            height: "auto",
                          }}
                        />
                      ) : (
                        <div>{displayChoices[0]}</div>
                      )}
                    >
                    </Form.Check>
                  </Col>

                  <Col>
                    <Form.Check
                      type="radio"
                      name="0"
                      id="radio-0"
                      checked={choices[1].text === correctAnswer.text}
                      label={quizType === "a" ? (
                        <Image
                          src={displayChoices[1]}
                          className={styles.img}
                          alt="Image"
                          style={{
                            width: "10rem",
                            height: "auto",
                          }}
                        />
                      ) : (
                        <div>{displayChoices[1]}</div>
                      )}
                    >
                    </Form.Check>
                  </Col>
                </Row>
                
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      name="0"
                      id="radio-0"
                      checked={choices[2].text === correctAnswer.text}
                      label={quizType === "a" ? (
                        <Image
                          src={displayChoices[2]}
                          className={styles.img}
                          alt="Image"
                          style={{
                            width: "10rem",
                            height: "auto",
                          }}
                        />
                      ) : (
                        <div>{displayChoices[2]}</div>
                      )}
                    >
                    </Form.Check>
                  </Col>

                  <Col>
                    <Form.Check
                      type="radio"
                      name="0"
                      id="radio-0"
                      checked={choices[3].text === correctAnswer.text}
                      label={quizType === "a" ? (
                        <Image
                          src={displayChoices[3]}
                          className={styles.img}
                          alt="Image"
                          style={{
                            width: "10rem",
                            height: "auto",
                          }}
                        />
                      ) : (
                        <div>{displayChoices[3]}</div>
                      )}
                    >
                    </Form.Check>
                  </Col>
                </Row>
              </Form> : <Form>
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      name="0"
                      id="radio-0"
                      onChange={() => handleAnswerSelection(choices[0])}
                      onClick={() => handleAnswerSelection(choices[0])}
                      checked={selectedAnswer === choices[0]}
                      label={quizType === "a" ? (
                        <Image
                          src={displayChoices[0]}
                          className={styles.img}
                          alt="Image"
                          onClick={() => handleAnswerSelection(choices[0])}
                          style={{
                            width: "10rem",
                            height: "auto",
                          }}
                        />
                      ) : (
                        <div>{displayChoices[0]}</div>
                      )}
                    >
                    </Form.Check>
                  </Col>

                  <Col>
                    <Form.Check
                      type="radio"
                      name="1"
                      id="radio-1"
                      onChange={() => handleAnswerSelection(choices[1])}
                      onClick={() => handleAnswerSelection(choices[1])}

                      checked={selectedAnswer === choices[1]}
                      label={quizType === "a" ? (
                        <Image
                          src={displayChoices[1]}
                          className={styles.img}
                          alt="Image"
                          onClick={() => handleAnswerSelection(choices[1])}
                          style={{
                            width: "10rem",
                            height: "auto",
                          }}
                        />
                      ) : (
                        <div>{displayChoices[1]}</div>
                      )}
                    >
                    </Form.Check>
                  </Col>
                </Row>
                
                <Row>
                  <Col>
                    <Form.Check
                      type="radio"
                      name="2"
                      id="radio-2"
                      onChange={() => handleAnswerSelection(choices[2])}
                      onClick={() => handleAnswerSelection(choices[2])}

                      checked={selectedAnswer === choices[2]}
                      label={quizType === "a" ? (
                        <Image
                          src={displayChoices[2]}
                          className={styles.img}
                          alt="Image"
                          onClick={() => handleAnswerSelection(choices[2])}
                          style={{
                            width: "10rem",
                            height: "auto",
                          }}
                        />
                      ) : (
                        <div>{displayChoices[2]}</div>
                      )}
                    >
                    </Form.Check>
                  </Col>

                  <Col>
                    <Form.Check
                      type="radio"
                      name="3"
                      id="radio-3"
                      onChange={() => handleAnswerSelection(choices[3])}
                      onClick={() => handleAnswerSelection(choices[3])}
                      checked={selectedAnswer === choices[3]}
                      label={quizType === "a" ? (
                        <Image
                          src={displayChoices[3]}
                          className={styles.img}
                          alt="Image"
                          onClick={() => handleAnswerSelection(choices[3])}
                          style={{
                            width: "10rem",
                            height: "auto",
                          }}
                        />
                      ) : (
                        <div>{displayChoices[3]}</div>
                      )}
                    >
                    </Form.Check>
                  </Col>
                </Row>
              </Form>}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Quiz;
