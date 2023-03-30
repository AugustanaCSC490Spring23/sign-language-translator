import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import { BrowserRouter } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <BrowserRouter>
                <Navbar className="style-navbar" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav className="style-nav">
                            <Nav.Item className="style-item">
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="style-item">
                                <Nav.Link href="#learning">Learning</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="style-item">
                                <Nav.Link href="/translator">Translator</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="style-item">
                                <Nav.Link href="#quiz">Quiz</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="style-item">
                                <Nav.Link href="#about-us">About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="style-item">
                                <Nav.Link href="/my-account">My Account</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </BrowserRouter>
        </div>
    );
}

export default NavBar;