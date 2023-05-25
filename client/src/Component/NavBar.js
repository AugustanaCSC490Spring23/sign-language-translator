import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./NavBar.module.css";
import AuthButtons from "./AuthButtons";

function NavBar() {
  return (
    <Navbar className={styles.styleNavbar} expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="basic-navbar-nav"
      >
        <Nav className={styles.styleNav}>
          <Nav.Item className={styles.styleItem}>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.styleItem}>
            <Nav.Link href="/learning">Learning</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.styleItem}>
            <Nav.Link href="/translator">Translator</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.styleItem}>
            <Nav.Link href="/about-us">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item className={styles.styleItem}>
            <Nav.Link href="/resources">Resources</Nav.Link>
          </Nav.Item>
          <AuthButtons />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
