import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import Jumbotron from "../../Component/Jumbotron.js";

import styles from "./Dictionary.module.css";

function LetterButton(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/learning/dictionary/${props.letter.toLowerCase()}`);
  };

  const buttonClasses = {
    "d-flex": true,
    "align-items-center": true,
    [styles.button]: true,
  };

  return (
    <Button
      variant="light"
      className={buttonClasses}
      style={{
        width: "4.25cm",
        height: "4.25cm",
        borderRadius: "5px",
        margin: "0.5cm",
      }}
      onClick={handleClick}
    >
      <span
        className={styles.letter}
        style={{
          fontSize: "3cm",
          lineHeight: "5cm",
          textAlign: "center",
        }}
      >
        {props.letter}
      </span>
    </Button>
  );
}

const Dictionary = () => {
  const letters = Array.from(Array(26), (_, i) =>
    String.fromCharCode(65 + i),
  ); // creates an array of 26 letters of the alphabet
  return (
    <>
      <Jumbotron />
      <div className={styles.letterContainer}>
        {letters.map((letter, index) => (
          <LetterButton
            key={index}
            letter={letter}
          />
        ))}
      </div>
    </>
  );
};

export default Dictionary;
