import {
  Container,
  Form,
  Row,
  Col,
  Button,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";
import CusButton from "../../Component/CusButton";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signup } from "../../../../server/controllers/authController";

const Center = ({ children }) => {
  return (
    <Row className="mb-3">
      <Col xs={{ span: 10, offset: 1 }}>{children}</Col>
    </Row>
  );
};

const Signup = () => {
  return (
    <Container fluid className="container">
      <Form className="form">
        <div className="compo">
          <h1 className="mb-5 text">Sign Up</h1>
          <Row>
            <Col
              className="mb-3"
              xs={{ span: 10, offset: 1 }}
              md={{ span: 5, offset: 1 }}
            >
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{
                  borderRadius: "25px",
                  background: "#E7D4B6",
                  boxShadow: "none",
                  border: "none",
                }}
                className="input"
              />
            </Col>
            <Col className="mb-3" xs={{ span: 10, offset: 0 }} md={5}>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                style={{
                  borderRadius: "25px",
                  background: "#E7D4B6",
                  boxShadow: "none",
                  border: "none",
                }}
                className="input"
              />
            </Col>
          </Row>

          <Center>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{
                borderRadius: "25px",
                background: "#E7D4B6",
                boxShadow: "none",
                border: "none",
              }}
              className="input"
            />
          </Center>

          <Center>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              style={{
                borderRadius: "25px",
                background: "#E7D4B6",
                boxShadow: "none",
                border: "none",
              }}
              className="input"
            />
          </Center>

          <Center>
            <CusButton
              bgcolor="#C3A580"
              color="#3E1408"
              radius="25"
              title="Sign Up"
              weight="750"
            />
          </Center>
        </div>
      </Form>
    </Container>
  );
};

export default Signup;
