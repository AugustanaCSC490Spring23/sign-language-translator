import { useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";

import "./NavBar.css";

function AuthButtons() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("jwt") && localStorage.getItem("jwt") !== undefined
      ? true
      : false
  );

  const handleSignout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    setLoggedIn(false);
    window.location.assign("/login")
  };

  const location = useLocation();

  if (loggedIn) {
    return (
      <Dropdown className="style-item">
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          My Account
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/me">My Profile</Dropdown.Item>
          <Dropdown.Item href="/flashcards">Flashcards</Dropdown.Item>
          <Dropdown.Item href="/quiz">Quiz</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSignout}>Signout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else {
    return (
      <Nav.Item className="style-item">
        {location.pathname !== "/login" && (
          <Button size="sm" variant="outline-secondary" className="nav-btn">
            <Nav.Link href="/login">Login</Nav.Link>
          </Button>
        )}
        {location.pathname !== "/signup" && (
          <Button size="sm" variant="outline-secondary" className="nav-btn">
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Button>
        )}
      </Nav.Item>
    );
  }
}

export default AuthButtons;
