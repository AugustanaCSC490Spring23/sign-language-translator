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

const assignRandomAvatar = () => {
  // Define an array of avatar picture file names
  const avatarSet = [
    "https://res.cloudinary.com/dfb7mq7zb/image/upload/v1683919245/animals%20avatars/cat_avatar_k9jl9k.jpg",
    "https://res.cloudinary.com/dfb7mq7zb/image/upload/v1683919245/animals%20avatars/cow_avatar_cewswx.jpg",
    "https://res.cloudinary.com/dfb7mq7zb/image/upload/v1683919244/animals%20avatars/deer_avatar_kaho5i.jpg",
    "https://res.cloudinary.com/dfb7mq7zb/image/upload/v1683919245/animals%20avatars/fox_avatar_buh3c4.jpg",
    "https://res.cloudinary.com/dfb7mq7zb/image/upload/v1683919245/animals%20avatars/dog_avatar_qayjhd.jpg",
    "https://res.cloudinary.com/dfb7mq7zb/image/upload/v1683919245/animals%20avatars/hen_avatar_rk6eua.jpg",
    "https://res.cloudinary.com/dfb7mq7zb/image/upload/v1683919245/animals%20avatars/monkey_avatar_ej1kff.jpg",
    "https://res.cloudinary.com/dfb7mq7zb/image/upload/v1683919244/animals%20avatars/panda_avatar_enzwgm.jpg",
    "https://res.cloudinary.com/dfb7mq7zb/image/upload/v1683919244/animals%20avatars/pig_avatar_cb4rdg.jpg",
  ];

  // Generate a random index number between 0 and the length of the avatar set
  const randomIndex = Math.floor(Math.random() * avatarSet.length);

  // Get the file name of the randomly selected avatar picture
  const randomAvatar = avatarSet[randomIndex];
  return randomAvatar;
};
// sign up user
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

    const avatar = assignRandomAvatar();

    const signedUpUser = {
      email: user.email,
      name: user.name,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
      avatar,
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
        </div>
      </Form>
    </Container>
  );
};

export default Signup;
