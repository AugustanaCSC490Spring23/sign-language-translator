import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRandom,
  FaSyncAlt,
  FaTimes,
} from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Modal,
} from "react-bootstrap";

import {
  getFlashcardsCollectionById,
  removeFlashcards,
} from "../../services/flashcardsService";
import requireAuth from "../../hoc/requireAuth";
import { updateUser } from "../../services/authService";

import styles from "./Flashcards.module.css";
import FlashcardsTable from "../../Component/FlashcardsTable";

const FlashcardDisplayer = ({
  flashcards,
  shuffleCards,
  slug,
  onDeleteFlashcard,
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardMode, setCardMode] = useState("default");
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCardClick = (event) => {
    const clickedElement = event.target;

    // Check if the clicked element is the delete button or its parent
    const isDeleteButton =
      clickedElement.classList.contains(styles.removeButton) ||
      clickedElement.parentElement.classList.contains(
        styles.removeButton,
      );

    // If the clicked element is the delete button, prevent the flip action
    if (isDeleteButton) {
      return;
    }

    setIsFlipped((prevState) => !prevState);
  };

  const handleToggleMode = () => {
    setCardMode(cardMode === "default" ? "flipped" : "default");
  };

  const handlePreviousClick = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex((prevIndex) => prevIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleNextClick = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex((prevIndex) => prevIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleShuffleClick = () => {
    shuffleCards();
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const handleDeleteConfirmation = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteConfirm = () => {
    const currentCard = flashcards[currentCardIndex];

    removeFlashcards([currentCard._id], slug)
      .then(() => {
        onDeleteFlashcard(currentCard._id);
        setCurrentCardIndex((prevIndex) =>
          Math.max(prevIndex - 1, 0),
        );
      })
      .catch((error) => {
        console.log("Error deleting flashcard:", error);
      });

    setShowDeleteModal(false);
  };

  const currentCard = flashcards[currentCardIndex];

  // Render the front of the card based on the card mode
  const meaningPhoto = currentCard ? currentCard.meaningPhoto : null;
  const signPhotos = currentCard ? currentCard.signPhotos : [];

  // Render the front of the card based on the card mode
  const renderCardFront = () => {
    if (cardMode === "default") {
      return (
        <div
          className={`${styles.front} ${
            isFlipped ? styles.hidden : ""
          }`}
        >
          {meaningPhoto ? (
            <Image
              src={meaningPhoto}
              alt="Front"
              className={styles.image}
            />
          ) : (
            <>{currentCard?.text}</>
          )}
        </div>
      );
    } else if (cardMode === "flipped") {
      return (
        <div
          className={`${styles.front} ${
            isFlipped ? "" : styles.hidden
          }`}
        >
          {signPhotos.map((image, index) => (
            <Image
              key={index}
              src={image[1]}
              alt={`Image ${index}`}
              className={styles.image}
            />
          ))}
        </div>
      );
    }
  };

  // Render the back of the card based on the card mode
  const renderCardBack = () => {
    if (cardMode === "default") {
      return (
        <div
          className={`${styles.back} ${
            isFlipped ? "" : styles.hidden
          }`}
        >
          {signPhotos.map((image, index) => (
            <Image
              key={index}
              src={image[1]}
              alt={`Image ${index}`}
              className={styles.image}
            />
          ))}
        </div>
      );
    } else if (cardMode === "flipped") {
      return (
        <div
          className={`${styles.back} ${
            isFlipped ? styles.hidden : ""
          }`}
        >
          {meaningPhoto ? (
            <Image
              src={meaningPhoto}
              alt="Back"
              className={styles.image}
            />
          ) : (
            currentCard?.text
          )}
        </div>
      );
    }
  };

  return (
    <Container>
      <Row className="my-3 justify-content-center">
        <Col xs="auto">
          <div className={styles.flashcardDisplayer}>
            <div
              className={styles.flashcard}
              onClick={handleCardClick}
              style={{
                transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
              }}
            >
              {renderCardFront()}
              {renderCardBack()}
              <Button
                onClick={handleDeleteConfirmation}
                className={styles.removeButton}
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  zIndex: 2,
                }}
              >
                <FaTimes
                  style={{ color: "rgba(0, 0, 0, 0.25)" }}
                  onClick={handleCardClick}
                />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="my-3 justify-content-center align-items-center">
        <Col xs="auto">
          <Button
            onClick={handleToggleMode}
            className={styles.arrowButton}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <FaSyncAlt style={{ color: "rgba(0, 0, 0, 0.25)" }} />
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            onClick={handlePreviousClick}
            disabled={currentCardIndex === 0}
            className={styles.arrowButton}
            style={{
              backgroundColor:
                currentCardIndex === 0 ? "#d1bda8" : "transparent",
              borderColor: "transparent",
            }}
          >
            <FaArrowLeft style={{ color: "rgba(0, 0, 0, 0.25)" }} />
          </Button>
        </Col>
        <Col xs="auto">
          <div className={styles.cardIndex}>
            {currentCardIndex + 1}/{flashcards.length}
          </div>
        </Col>
        <Col xs="auto">
          <Button
            onClick={handleNextClick}
            disabled={currentCardIndex === flashcards.length - 1}
            className={styles.arrowButton}
            style={{
              backgroundColor:
                currentCardIndex === flashcards.length - 1
                  ? "#d1bda8"
                  : "transparent",
              borderColor: "transparent",
            }}
          >
            <FaArrowRight style={{ color: "rgba(0, 0, 0, 0.25)" }} />
          </Button>
        </Col>
        <Col xs="auto">
          <Button
            onClick={handleShuffleClick}
            className={`${styles.arrowButton} ${styles.shuffleButton}`}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
            }}
          >
            <FaRandom style={{ color: "rgba(0, 0, 0, 0.25)" }} />
          </Button>
        </Col>
      </Row>
      <Modal
        show={showDeleteModal}
        onHide={handleDeleteCancel}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Hold on...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this flashcard?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

const FlashcardsPage = () => {
  const { slug } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [collection, setCollection] = useState({});

  useEffect(() => {
    getFlashcardsCollectionById(slug)
      .then((response) => {
        setFlashcards(response.data.data.items);
        setCollection(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  const shuffleCards = () => {
    const shuffledFlashcards = [...flashcards];
    for (let i = shuffledFlashcards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledFlashcards[i], shuffledFlashcards[j]] = [
        shuffledFlashcards[j],
        shuffledFlashcards[i],
      ];
    }
    setFlashcards(shuffledFlashcards);
  };

  const onDeleteFlashcard = (deletedFlashcardId) => {
    // Remove the deleted flashcard from the array
    const updatedFlashcards = flashcards.filter(
      (card) => card._id !== deletedFlashcardId,
    );

    setFlashcards(updatedFlashcards);
    updateUser();
  };

  if (!flashcards.length)
    return (
      <div style={{ marginTop: "50px" }}>
        Empty collection. Add more flashcards!
      </div>
    );

  return (
    <div>
      <h2 style={{ marginTop: "3rem" }}>{collection.title}</h2>
      <FlashcardDisplayer
        flashcards={flashcards}
        shuffleCards={shuffleCards}
        slug={slug}
        onDeleteFlashcard={onDeleteFlashcard}
      />

      <FlashcardsTable flashcards={flashcards}></FlashcardsTable>

    </div>
  );
};

export default requireAuth(FlashcardsPage);
