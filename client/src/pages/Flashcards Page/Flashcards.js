import React, { useState } from 'react';
import styles from './Flashcards.module.css';

const Flashcard = () => {
  // State variables
  const [currentCard, setCurrentCard] = useState(0); // Track the index of the current flashcard
  const [isFlipped, setIsFlipped] = useState(false); // Track whether the flashcard is flipped or not

  // Array of flashcards
  const flashcards = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
  ];

  // Function to handle next card
  const handleNextCard = () => {
    setIsFlipped(false); // Reset the flipped state when moving to the next card

    setCurrentCard((prevCard) => (prevCard + 1) % flashcards.length); // Increment the current card index and wrap around if necessary
  };

  // Function to handle previous card
  const handlePrevCard = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + flashcards.length) % flashcards.length); // Decrement the current card index and wrap around if necessary
    setIsFlipped(false); // Reset the flipped state when moving to the previous card
  };

  // Function to handle card flip
  const handleFlipCard = () => {
    if (!isFlipped) {
      setIsFlipped(true); 
    }
  };

  // Check if there are flashcards available
  if (!flashcards || flashcards.length === 0) {
    return <div>No flashcards available.</div>;
  }

  // Destructure the current card
  const { question, answer } = flashcards[currentCard];

  return (
    <div className={styles.flashcard}>
      {/* Flashcard container */}
      <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlipCard}>
        {/* Front side of the flashcard */}
        <div className={styles.front}>
          <h2>{question}</h2>
        </div>
        {/* Back side of the flashcard */}
        <div className={styles.back}>
          <h2>{answer}</h2>
        </div>
      </div>

      {/* Buttons for navigating between flashcards */}
      <div className={styles.buttons}>
        <button onClick={handleNextCard}>Next</button>
        <button onClick={handlePrevCard}>Prev</button>
        
      </div>
    </div>
  );
};

export default Flashcard;


