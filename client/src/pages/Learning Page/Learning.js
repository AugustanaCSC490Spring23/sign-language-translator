import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import DictionaryImage from "../../Resources/Images/dictionary-image.png";
import LessonsImage from "../../Resources/Images/lessons-image.png";

import "./Learning.css"; // Import your custom CSS file for styling

const Learning = () => {
  const navigate = useNavigate();

  const handleDictionaryClick = () => {
    navigate("/learning/dictionary");
  };

  const handleLessonsClick = () => {
    navigate("/learning/lessons");
  };

  return (
    <div className="card-container">
      <Card className="learning-card" onClick={handleDictionaryClick}>
        <Card.Img variant="top" src={DictionaryImage} className="card-image" />
        <Card.Body>
          <Card.Title>Dictionary</Card.Title>
          <Card.Text>Search words based on letters</Card.Text>
          <Button variant="outline-dark">Search</Button>
        </Card.Body>
      </Card>
      <Card className="learning-card" onClick={handleLessonsClick}>
        <Card.Img variant="top" src={LessonsImage} className="card-image" />
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
