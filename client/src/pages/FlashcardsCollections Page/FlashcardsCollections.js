import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import requireAuth from "../../hoc/requireAuth";

import styles from "./FlashcardsCollections.module.css";

const Collection = ({ title, description }) => {
  return (
    <div className={styles.collectionContainer}>
      <div className={styles.collection}>
        <div className={styles.mainCard}>
          <div className={styles.mainCardBody}>{title}</div>
        </div>
        <div className={styles.backCard}>
          <div className={styles.backCardBody}>{description}</div>
        </div>
      </div>
    </div>
  );
};

const FlashcardsCollectionsPage = () => {
  const navigate = useNavigate();
  const [collections, setCollections] = useState();
  useEffect(() => {
    setCollections(
      JSON.parse(localStorage.getItem("user")).flashcardsCollections,
    );
  }, [navigate]);

  const handleCollectionClick = (slug) => {
    navigate(`/flashcards/${slug}`);
  };

  if (!collections) {
    return <div>Loading...</div>;
  }
  return (
    <Container style={{ marginTop: "30px" }}>
      <h2>My Flashcard Collections</h2>
      <Row>
        {collections.map((collection) => {
          return (
            <Col
              md={4}
              key={collection._id}
              onClick={(e) => handleCollectionClick(collection.slug)}
            >
              <Collection
                title={collection.title}
                description={collection.description}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default requireAuth(FlashcardsCollectionsPage);
