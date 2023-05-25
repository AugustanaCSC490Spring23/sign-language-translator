import {Button, Col, Row, Card} from 'react-bootstrap';
import styles from "./MyCard.module.css";

const MyCard = ({quiz}) => {
    const {title,topic,qualifyFor,dateTaken,score,isCompleted} = quiz;
    return (
        <Col xs>
            <Card className={styles.card}>
                {/* <Card.Img variant="top" src="/" className={styles.img} /> */}
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {topic}
                    </Card.Text>

                    <Card.Text className={styles.qualifyFor}> 
                        {qualifyFor}
                    </Card.Text>
                    <div className={styles.tagList}>
                        {isCompleted ? 
                            <Row>
                                <Col>
                                    <Card.Text className={styles.isCompleted}>Completed</Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text className={styles.score}>Score: {score}</Card.Text>
                                </Col>
                            </Row>
                            : 
                            <Row>
                                <Col>
                                    <Card.Text className={styles.isCompleted}>Incompleted</Card.Text>
                                </Col>
                                <Col>
                                    <Card.Text className={styles.score}>Score: N/A</Card.Text>
                                </Col>
                            </Row>
                        }
                    </div>
                    <Button variant="primary" href="/">Let's go!</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default MyCard;


// <Card.Title>{title}</Card.Title>
//                     <Card.Text>
//                         {description}
//                     </Card.Text>
//                     <Button variant="primary" href={url}>Let's go!</Button>