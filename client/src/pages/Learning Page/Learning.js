import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import DictionaryImage from "../../Resources/Images/dictionary-image.png";
import LessonsImage from "../../Resources/Images/lessons-image.png";

import styles from "./Learning.module.css"; // Import your custom CSS file for styling

const Learning = () => {
  const navigate = useNavigate();

  const handleDictionaryClick = () => {
    navigate("/learning/dictionary");
  };

  const handleLessonsClick = () => {
    navigate("/learning/lessons");
  };

  return (
    <div className={styles.cardContainer}>
      <Card className={styles.learningCard} onClick={handleDictionaryClick}>
        <Card.Img variant="top" src={DictionaryImage} className={styles.cardImage} />
        <Card.Body>
          <Card.Title>Dictionary</Card.Title>
          <Card.Text>Search words based on letters</Card.Text>
          <Button variant="outline-dark">Search</Button>
        </Card.Body>
      </Card>
      <Card className={styles.learningCard} onClick={handleLessonsClick}>
        <Card.Img variant="top" src={LessonsImage} className={styles.cardImage} />
        <Card.Body>
          <Card.Title>Lessons</Card.Title>
          <Card.Text>Learn sign language by lessons</Card.Text>
          <Button variant="outline-dark">Learn</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Learning;
