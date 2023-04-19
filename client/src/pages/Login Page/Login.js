import { Container, Form, Row, Col } from "react-bootstrap";
import CusButton from "../../Component/CusButton";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { logIn } from "../../services/authService";

import "./Login.css";

const Center = ({ children }) => {
  return (
    <Row className="mb-3">
      <Col md={{ span: 6, offset: 3 }}>{children}</Col>
    </Row>
  );
};

const Login = () => {
  const navigate = useNavigate();

  // if logged in already, user will be directed to homepage
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, [navigate]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    await logIn({
      email: user.email,
      password: user.password,
    });
    
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container fluid className="container">
      <Form className="form" onSubmit={onSubmit}>
        <div className="compo">
          <h1 className="mb-5 text">Login</h1>

          <Center>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              className="input"
              onChange={handleChange}
            />
          </Center>

          <Center>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              className="input"
              onChange={handleChange}
            />
          </Center>

          <Center>
            <CusButton
              bgcolor="#C3A580"
              color="#3E1408"
              radius="25"
              title="Login"
              weight="750"
              focus="#C3A580"
              type="submit"
            />
          </Center>

          <Center>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Form.Text>
                <Link to="/signup" className="link">
                  Create Account
                </Link>
              </Form.Text>

              <Form.Text>
                <a className="link" href="">
                  Need Help?
                </a>
              </Form.Text>
            </div>
          </Center>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
