import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  InputGroup,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import requireAuth from "../../hoc/requireAuth";
import {
  deleteCollection,
  addCollection,
} from "../../services/flashcardsService";
import { updateUser } from "../../services/authService";

import styles from "./FlashcardsCollections.module.css";
import EmptyPage from "../../Component/EmptyPage";

const Collection = ({ title, description, onDelete, slug }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = (event) => {
    event.stopPropagation();
    setShowModal(true);
  };

  const handleCollectionClick = () => {
    navigate(`${slug}`);
  };

  const handleDeleteConfirm = () => {
    deleteCollection(slug)
      .then((response) => {
        onDelete(slug);
        updateUser();
      })
      .catch((error) => {
        console.log("Error deleting collection:", error);
      });

    setShowModal(false);
  };

  const handleDeleteCancel = () => {
    setShowModal(false);
  };
  return (
    <div className={styles.collectionContainer}>
      <div className={styles.collection}>
        <div
          className={styles.mainCard}
          onClick={handleCollectionClick}
        >
          <div className={styles.txt}>{title}</div>
          <Button
            className={styles.removeButton}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1000,
            }}
            onClick={handleIconClick}
          >
            <FaTimes
              style={{ color: "rgba(0, 0, 0, 0.25)" }}
              onClick={handleIconClick}
            />
          </Button>
        </div>
        <div
          className={styles.backCard}
          onClick={handleCollectionClick}
        >
          <div className={styles.txt}>{description}</div>
          <Button
            className={styles.removeButton}
            style={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 1000,
            }}
            onClick={handleIconClick}
          >
            <FaTimes
              style={{ color: "rgba(0, 0, 0, 0.25)" }}
              onClick={handleIconClick}
            />
          </Button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleDeleteCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Be careful...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {`Are you sure you want to delete collection: ${title}?`}
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
    </div>
  );
};

const FlashcardsCollectionsPage = () => {
  const navigate = useNavigate();
  const [collections, setCollections] = useState();
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState("");
  const [newCardDesc, setNewCardDesc] = useState("");
  const [sortedBy, setSortedBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSortChange = (event) => {
    setSortedBy(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCancel = () => {
    setShowModal(false);
  };
  const handleTitleChange = (event) =>
    setNewCardTitle(event.target.value);

  const handleDescChange = (event) =>
    setNewCardDesc(event.target.value);

  const [isAdded, setAdded] = useState(false);

  const handleAdd = (event) => {
    setAdded(true);
    setShowModal(false);
    addCollection(newCardTitle, newCardDesc).then((response) => {
      setCollections([...collections, response.data.data]);
      updateUser();
    });
  };

  useEffect(() => {
    setCollections(
      JSON.parse(localStorage.getItem("user")).flashcardsCollections,
    );
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [navigate]);

  // Apply sorting based on sortedBy state
  // useEffect(() => {
  //   let sortedCollections = [...collections];
  //   if (sortedBy === "title") {
  //     sortedCollections.sort((a, b) =>
  //       a.title.localeCompare(b.title, undefined, {
  //         sensitivity: "base",
  //       }),
  //     );
  //   } else if (sortedBy === "createdAt") {
  //     sortedCollections.sort(
  //       (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  //     );
  //   } else if (sortedBy === "updatedAt") {
  //     sortedCollections.sort(
  //       (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt),
  //     );
  //   }
  //   setCollections(sortedCollections);
  // }, [sortedBy, collections]);

  const onDeleteCollection = (deletedSlug) => {
    const updatedCollections = collections.filter(
      (collection) => collection.slug !== deletedSlug,
    );
    setCollections(updatedCollections);
  };

  if (!collections) {
    return <div>Loading...</div>;
  }
  if (user.flashcardsCollections.length === 0) {
    return <EmptyPage message={`Add a collection!`} />;
  }
  // Filter collections based on searchTerm state
  // const filteredCollections = user.flashcardsCollections.filter((collection) =>
  //   collection.title.toLowerCase().includes(searchTerm.toLowerCase()),
  // );
  return (
    <Container>
      <h2 style={{ marginTop: "3rem" }}>{user.name}'s Collections</h2>
      <Row>
        <Col>
          <Form.Group className={styles.sortSearch}>
            <Row>
              <Col xs={2}>
                <Form.Label>Sort By:</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="select"
                  value={sortedBy}
                  onChange={handleSortChange}
                >
                  <option value="">None</option>
                  <option value="title">Title</option>
                  <option value="createdAt">Created At</option>
                  <option value="updatedAt">Updated At</option>
                </Form.Control>
              </Col>
            </Row>
          </Form.Group>
        </Col>
      
        <Col>
          <Form.Group className={styles.sortSearch}>
            <Form.Control
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col
          md={4}
          key={1}
          onClick={() => {
            setShowModal(true);
            setAdded(false);
          }}
        >
          <div className={styles.collectionContainer}>
            <div className={styles.collection}>
              <div className={styles.addNew}>+</div>
            </div>
          </div>
        </Col>

        <Modal show={showModal} onHide={handleCancel} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add New Collection</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Title
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleTitleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Description
              </InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                onChange={handleDescChange}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>

        {collections.map((collection) => {
          return (
            <Col md={4} key={collection._id}>
              <Collection
                title={collection.title}
                description={collection.description}
                slug={collection.slug}
                onDelete={onDeleteCollection}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default requireAuth(FlashcardsCollectionsPage);
