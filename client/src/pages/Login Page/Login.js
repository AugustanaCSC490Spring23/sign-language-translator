import { Container, Form, Row, Col } from "react-bootstrap";
import CusButton from "../../Component/CusButton";
import style from "./Login.module.css";
import { useState } from "react";
import axios from "axios";

const Center = ({ children }) => {
  return (
    <Row className="mb-3">
      <Col md={{ span: 6, offset: 3 }}>{children}</Col>
    </Row>
  );
};

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    axios({
      method: "post",
      url: "/api/v1/users/login",
      data: {
        email: user.email,
        password: user.password,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user.email);
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
                <a
                  className={style.link}
                  href="https://www.w3schools.com/cssref/tryit.php?filename=trycss_sel_link_more1"
                >
                  Create Account
                </a>
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
