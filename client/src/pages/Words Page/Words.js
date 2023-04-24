import { useParams } from "react-router-dom";

import Jumbotron from "../../Component/Jumbotron.js";
import WordCard from "../../Component/WordCard.js";

import { getWordsByFirstLetter } from "../../services/itemsService.js";

import styles from "./Words.module.css";
import { useEffect, useState } from "react";

const Words = () => {
  const { letter } = useParams();
  const [words, setWords] = useState([]);

  useEffect(() => {
    getWordsByFirstLetter(letter).then((response) => {
      setWords(response.data.data.items);
    });
  }, [letter]);

  return (
    <>
      <Jumbotron />
      <div className={styles.letterContainer}>
        {words.map((word, index) => (
          <WordCard key={word.id} word={word} letter={letter} />
        ))}
      </div>
    </>
  );
};

export default Words;
