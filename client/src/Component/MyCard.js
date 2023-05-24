import {Button, Col, Card} from 'react-bootstrap';
import styles from "./MyCard.module.css";

const MyCard = ({card}) => {
    // const {url, title, description, imgUrl} = card;
    return (
        <Col xs>
            <Card className={styles.card}>
                <Card.Img variant="top" src="/" className={styles.img} />
                <Card.Body>
                    <Card.Title>{card}</Card.Title>
                    <Card.Text>
                        aaaaaaaaaaaaaaaaaa
                    </Card.Text>
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