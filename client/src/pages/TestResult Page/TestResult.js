import {
    Container,
    Row,
    Col,
    Form,
    Image,
    Card
} from "react-bootstrap";
import Quiz from "../../Component/Quiz";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTestResult } from "../../services/quizzesService";


import styles from "./TestResult.module.css";

const TestResult = () => {
    const { id } = useParams();
    const [quizzes, setQuizzes] = useState();
    const [test, setTest] = useState();
    useEffect(() => {
        getTestResult(id).then(res => {
            console.log(res);
            setQuizzes(res.data.data.test.quizzes);
            setTest(res.data.data.test);
        });
    }, [id]);

    if (!quizzes) return <div>Loading ...</div>

    return (
        <Container>
            <Row style={{ margin: "1rem 0" }}>
                <Card className={styles.card}>
                <Card.Body>
                    <Card.Title>
                        <div style={{fontSize: "2em"}}>
                            <h4 style={{ height: "2rem", margin: "1rem 0" }}>
                                Test Results 
                            </h4>
                            {test.title}
                        </div>
                    </Card.Title>
                </Card.Body>
                </Card>
            </Row>

            {quizzes.map(quiz => <Quiz quiz={quiz} viewTest={true} />)}
        </Container>
      
    );
  };
  
  export default TestResult;
  