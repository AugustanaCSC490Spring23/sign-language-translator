import { useParams } from "react-router-dom";

import Jumbotron from "../../Component/Jumbotron.js";
import WordCard from "../../Component/WordCard.js";
import {
  getWordByText,
  getWordsByFirstLetter,
  getWordsByTopic,
} from "../../services/itemsService.js";

import styles from "./Words.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Words = () => {
  const { letter, topic } = useParams();
  const [words, setWords] = useState([]);

  const { pathname } = useLocation();
  const [showJumbotron, setShowJumbotron] = useState(true);

  useEffect(() => {
    if (letter) {
      getWordsByFirstLetter(letter).then((response) => {
        setWords(response.data.data.items);
      });
    }
    if (topic) {
      getWordsByTopic(topic).then((response) => {
        setWords(response.data.data.items);
      });
    }
    if (pathname.includes("/lessons/")) {
      setShowJumbotron(false);
    }
  }, [letter, topic, pathname]);
  const getWord = (e) => {};
  return (
    <>
      {showJumbotron && <Jumbotron />}
      <div className={styles.letterContainer}>
        {words.map((word, index) => (
          <WordCard key={word.id} word={word} letter={letter} />
        ))}
      </div>
    </>
  );
};

export default Words;
