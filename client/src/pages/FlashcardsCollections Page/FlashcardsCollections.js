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



import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Flashcards.module.css";
import { getFlashcardsCollectionById } from "../../services/flashcardsService";
import requireAuth from "../../hoc/requireAuth";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const FlashcardsPage = () => {
  const { slug } = useParams();
  const [collection, setCollection] = useState();
  useEffect(() => {
    getFlashcardsCollectionById(slug)
      .then((response) => {
        setCollection(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [slug]);
  if (!collection) return <div>Loading...</div>;
  
    return (
    <div className="App">
        <h1>Flash cards</h1>
            
        <Carousel responsive={responsive}>

            <div>Item 1
                <div className={styles.flash_card}>
                    <div class= "card__inner">
                        <div class ="card__face card__face--front">
                            <h2> card front</h2>
                        </div>
                        <div class ="card__face card__face--back">
                            <div class="card__content">
                                <div class="card_header">
                                    <h2>Samuel</h2>
                                </div>
                                <div class="card__body">
                                    <h3>Translation</h3>
                                        <p>lorem ipsum

                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>Item 2
                <div class="flash_card">
                    <div class= "card__inner">
                        <div class ="card__face card__face--front">
                            <h2> card front</h2>
                        </div>
                        <div class ="card__face card__face--back">
                            <div class="card__content">
                                <div class="card_header">
                                    <h2>Samuel</h2>
                                </div>
                                <div class="card__body">
                                    <h3>Translation</h3>
                                        <p>lorem ipsum

                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>

            <div>Item 3
                <div class="flash_card">
                    <div class= "card__inner">
                        <div class ="card__face card__face--front">
                            <h2> card front</h2>
                        </div>
                        <div class ="card__face card__face--back">
                            <div class="card__content">
                                <div class="card_header">
                                    <h2>Samuel</h2>
                                </div>
                                <div class="card__body">
                                    <h3>Translation</h3>
                                        <p>lorem ipsum

                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div>Item 4
                <div class="flash_card">
                    <div class= "card__inner">
                        <div class ="card__face card__face--front">
                            <h2> card front</h2>
                        </div>
                        <div class ="card__face card__face--back">
                            <div class="card__content">
                                <div class="card_header">
                                    <h2>Samuel</h2>
                                </div>
                                <div class="card__body">
                                    <h3>Translation</h3>
                                        <p>lorem ipsum

                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </Carousel>
    
    </div>
    
    );
   
};


export default requireAuth(FlashcardsPage);
