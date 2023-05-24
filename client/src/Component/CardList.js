import { useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import MyCard from "./MyCard";
import styles from "./CardList.module.css";

const CardList = ({cards}) => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex) => prevIndex + 3);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => prevIndex - 3);
    };

    const visibleCards = cards.slice(startIndex, startIndex + 3);
    return (
        <Container>
            <Row>
                <Col xs lg={1} className={styles.buttonCol}>
                    {startIndex > 0 && <Button className={styles.button}  onClick={handlePrev}>
                        Prev
                    </Button>}
                </Col>
                

                {visibleCards.map(card => <MyCard card={card}/>)}


                <Col xs lg={1} className={styles.buttonCol}>
                    {startIndex + 3 < cards.length && <Button className={styles.button} onClick={handleNext}>
                        Next
                    </Button>}
                </Col>
            </Row>

           
        </Container>
    )
}

export default CardList;