import { Container, Form, Row, Col } from "react-bootstrap";
import CusButton from "../../Component/CusButton";
import { useState, useEffect } from "react";
import { signUp } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import style from "./Signup.module.css";

const Center = ({ children }) => {
  return (
    <Row className="mb-3">
      <Col xs={{ span: 10, offset: 1 }}>{children}</Col>
    </Row>
  );
};

const Signup = () => {
  const navigate = useNavigate();

  // if logged in already, user will be directed to homepage
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      navigate("/");
    }
  }, [navigate]);
  //user data
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

  //error
  const [error, setError] = useState(false);

  // onChange event
  const handleChange = (e) => {
    setError(false);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //onSubmit event
  const onSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.passwordConfirm) {
      setError(true);
      return;
    }

    setError(false);
    const signedUpUser = {
      email: user.email,
      name: user.name,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
    };
    signUp(signedUpUser);
  };

  return (
    <Container fluid className={style.container}>
      <Form className={style.form} onSubmit={onSubmit}>
        <div className={style.compo}>
          <h1 className={`mb-5 ${style.text}`}>Sign Up</h1>

          <Row>
            <Col
              className="mb-3"
              xs={{ span: 10, offset: 1 }}
              md={{ span: 5, offset: 1 }}
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                className={style.input}
                value={user.email}
                onChange={handleChange}
              />
            </Col>

            <Col className="mb-3" xs={{ span: 10, offset: 0 }} md={5}>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Username"
                className={style.input}
                value={user.name}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Center>
            <Form.Group>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                style={
                  error
                    ? { border: "2px solid red" }
                    : { border: "none" }
                }
                className={style.input}
                value={user.password}
                onChange={handleChange}
              />
              <Form.Text
                className={`mt-2 ${style.text}`}
                style={{ color: "red", fontSize: "0.8rem" }}
              >
                {error ? "Please input a correct password!" : ""}
              </Form.Text>
            </Form.Group>
          </Center>

          <Center>
            <Form.Group>
              <Form.Control
                type="password"
                name="passwordConfirm"
                placeholder="Confirm Password"
                style={
                  error
                    ? { border: "2px solid red" }
                    : { border: "none" }
                }
                // style = {{borderRadius: "25px",  background: "#E7D4B6", boxShadow: "none", border: "none"}}
                className={style.input}
                value={user.passwordConfirm}
                onChange={handleChange}
              />
              <Form.Text
                className={`mt-2 ${style.text}`}
                style={{ color: "red", fontSize: "0.8rem" }}
              >
                {error ? "Please confirm your password!s" : ""}
              </Form.Text>
            </Form.Group>
          </Center>

          <Center>
            <CusButton
              bgcolor="#C3A580"
              color="#3E1408"
              radius="25"
              title="Sign Up"
              weight="750"
              type="submit"
              focus="#C3A580"
            />
          </Center>
          <Center>
            <CusButton
              bgcolor="#C3A580"
              color="#3E1408"
              radius="25"
              title="Sign Up"
              weight="750"
              type="submit"
              focus="#C3A580"
            />
          </Center>
        </div>
      </Form>
    </Container>
  );
};

export default Signup;
