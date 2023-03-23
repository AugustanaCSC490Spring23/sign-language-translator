import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css";
import { Link, Outlet } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <Navbar className='color-nav container' style={{border: "2px solid black"}}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="#learning">Learning</Nav.Link>
                            <Nav.Link as={Link} to="/translator">Translator</Nav.Link>
                            <Nav.Link href="#quiz">Quiz</Nav.Link>
                            <Nav.Link href="#about-us">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/my-account">My Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
}

export default NavBar;