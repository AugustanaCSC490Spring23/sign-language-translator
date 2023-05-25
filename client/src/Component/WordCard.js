import React from "react";

import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

import styles from "./WordCard.module.css";

const WordCard = ({ word, letter }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/learning/dictionary/${letter}/${word.text}`);
  };
  if (word.meaningPhoto) {
    return (
      <Card
        className={styles.wordCard}
        style={{
          width: "6cm",
          height: "6cm",
          borderRadius: "10px",
          border: "solid 1px #dcdcdc",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleClick}
      >
        <Card.Img
          variant="top"
          src={word.meaningPhoto}
          style={{
            width: "4.25cm",
            height: "4.25cm",
            borderRadius: "10px",
          }}
        />
      </Card>
    );
  } else {
    return (
      <Card
        className={styles.wordCard}
        style={{
          width: "6cm",
          height: "6cm",
          borderRadius: "10px",
          border: "solid 1px #dcdcdc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleClick}
      >
        <Card.Text style={{ fontSize: "2.2em", fontWeight: "bold" }}>
          {word.text}
        </Card.Text>
      </Card>
    );
  }
};

export default WordCard;
