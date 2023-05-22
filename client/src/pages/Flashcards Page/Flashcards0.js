import React, { useState } from 'react';

const FlashcardCarousel = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="flashcard-carousel">
      <div className="flashcard">
        <h3>{flashcards[currentCardIndex].question}</h3>
        <p>{flashcards[currentCardIndex].answer}</p>
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
  );
};

const App = () => {
  const flashcards = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2' },
    { question: 'Question 3', answer: 'Answer 3' },
    // Add more flashcards as needed
  ];

  return (
    <div>
      <h1>Flashcard Carousel</h1>
      <FlashcardCarousel flashcards={flashcards} />
    </div>
  );
};

export default App;
