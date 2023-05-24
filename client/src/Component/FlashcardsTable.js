import { Container, Table, Image, Col, Row } from "react-bootstrap";
import { useState } from "react";
import styles from "./FlashcardsTable.module.css";

const FlashcardsTable = ({ flashcards }) => {

  if (!flashcards) return <div>Loading...</div>;
  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered responsive className={styles.table}>
            <thead>
              <tr>
                <th>Word</th>
                <th>Hand Sign</th>
              </tr>
            </thead>
            <tbody>
              {flashcards.slice(0,flashcards.length/2 + 1).map((flashcard) => (
                <tr key={flashcards._id}>
                  <td>{flashcard.text}</td>
                  <td className={styles.images}>
                    {flashcard.signPhotos.map((image, index) => (
                      <Image
                        key={index}
                        src={image[1]}
                        alt={`Image ${index}`}
                        className={styles.image}
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col>
          <Table striped bordered responsive className={styles.table}>
            <thead>
              <tr>
                <th>Word</th>
                <th>Hand Sign</th>
              </tr>
            </thead>
            <tbody>
              {flashcards.slice(flashcards.length/2 + 1).map((flashcard) => (
                <tr key={flashcards._id}>
                  <td>{flashcard.text}</td>
                  <td className={styles.images}>
                    {flashcard.signPhotos.map((image, index) => (
                      <Image
                        key={index}
                        src={image[1]}
                        alt={`Image ${index}`}
                        className={styles.image}
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

    </Container>
  );
};

export default FlashcardsTable;