import { Container, Form, Row, Col } from "react-bootstrap";
import CusButton from "../../Component/CusButton";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { logIn } from "../../services/authService";
import style from "./Login.module.css";

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

  const handleCreateAccountClick = () => {
    window.location.assign("/signup");
  };

  return (
    <Container fluid className={style.container}>
      <Form className={style.form} onSubmit={onSubmit}>
        <div className={style.compo}>
          <h1 className={`mb-5 ${style.text}`}>Login</h1>

          <Center>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={user.email}
              className={style.input}
              onChange={handleChange}
            />
          </Center>

          <Center>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              className={style.input}
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
              width="100%"
              focus="#C3A580"
              type="submit"
            />
          </Center>

          <Center>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Form.Text>
                <Link
                  className="link"
                  onClick={handleCreateAccountClick}
                >
                  Create Account
                </Link>
              </Form.Text>

              <Form.Text>
                <a
                  className={style.link}
                  href="https://www.w3schools.com/cssref/tryit.php?filename=trycss_sel_link_more1"
                >
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
