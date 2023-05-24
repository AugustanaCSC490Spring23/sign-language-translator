import { useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

import styles from "./NavBar.module.css";

function AuthButtons() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") && localStorage.getItem("jwt") !== undefined
      ? true
      : false
  );

  const [showModal, setShowModal] = useState(false);

  const handleSignout = () => {
    setShowModal(true);
  };

  const location = useLocation();

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalConfirm = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    setLoggedIn(false);
    window.location.assign("/login");
  };

  return (
    <>
      {loggedIn ? (
        <Dropdown className={styles.styleItem}>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
            My Account
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/me">My Profile</Dropdown.Item>
            <Dropdown.Item href="/flashcards">Flashcards</Dropdown.Item>
            <Dropdown.Item href="/quizzes">Quiz</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Signout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <Nav.Item className={styles.styleItem}>
          {location.pathname !== "/login" && (
            <Button
              size="sm"
              variant="outline-secondary"
              className="nav-btn"
            >
              <Nav.Link href="/login">Login</Nav.Link>
            </Button>
          )}
          {location.pathname !== "/signup" && (
            <Button
              size="sm"
              variant="outline-secondary"
              className="nav-btn"
            >
              <Nav.Link href="/signup">Signup</Nav.Link>
            </Button>
          )}
        </Nav.Item>
      )}

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leaving so soon?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleModalConfirm}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AuthButtons;
