import {
  Container,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import CusButton from "../../Component/CusButton";
import "./Signup.css";
import { useState } from 'react';
import axios from "axios";
import {signUp}  from "../../services/authService"

const Center = ({ children }) => {
  return (
    <Row className="mb-3">
      <Col xs={{ span: 10, offset: 1 }}>{children}</Col>
    </Row>
  );
};

const Signup = () => {
  
  //user data
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: ""
  })

  //error
  const [error, setError] = useState(false);


  // onChange event
  const handleChange = (e) => {
    setError(false);
    setUser({...user, [e.target.name]: e.target.value})
  }


  //onSubmit event
  const onSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.passwordConfirm) {
      setError(true);
      return;
    }
    
    setError(false);
    axios({
      method: 'post',
      url: '/api/v1/users/signup',
      data: {
        email: user.email,
        name: user.name,
        password: user.password,
        passwordConfirm: user.passwordConfirm
      }
    })
    .then((res) => {
    })
    .catch((e) => {
      console.log(e)
    });
  }

    return (
        <Container fluid className = "container">
                
          <Form className = "form"  onSubmit={onSubmit}>
            <div className = "compo">
              <h1 className = "mb-5 text">Sign Up</h1>

              <Row>
                <Col  className = "mb-3" xs = {{span: 10, offset: 1}} md = {{span: 5, offset: 1}}>
                  <Form.Control 
                    type="email" 
                    name = "email"
                    placeholder="Enter email"  
                    className = "input"
                    value = {user.email}
                    onChange = {handleChange}
                  />
                </Col>

                <Col  className = "mb-3" xs = {{span: 10, offset: 0}} md = {5}>
                  <Form.Control 
                    type="text"
                    name = "name"
                    placeholder="Enter Username"
                    className = "input"
                    value = {user.name}
                    onChange = {handleChange}
                  />

                </Col>
              </Row>

              <Center>
                <Form.Group>
                  <Form.Control 
                    type="password"
                    name = "password"
                    placeholder = "Password" 
                    style = {error ? {border: "2px solid red"} : {border: "none"}}
                    className = "input"
                    value = {user.password}
                    onChange = {handleChange}
                    
                  />
                   <Form.Text className = "mt-2 text" style = {{color: "red", fontSize: "0.8rem"}}>
                    {error? "Please input a correct password!": ""}
                  </Form.Text>
                </Form.Group>
                
              </Center>

              <Center>
                <Form.Group>
                  <Form.Control 
                      type="password"
                      name = "passwordConfirm"
                      placeholder = "Confirm Password"
                      style = {error ? {border: "2px solid red"} : {border: "none"}}
                      // style = {{borderRadius: "25px",  background: "#E7D4B6", boxShadow: "none", border: "none"}} 
                      className = "input"
                      value = {user.passwordConfirm}
                      onChange = {handleChange}
                    />
                    <Form.Text className = "mt-2 text" style = {{color: "red", fontSize: "0.8rem"}}>
                      {error? "Please confirm your password!s": ""}
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
                  type = "submit"
                  focus = "#C3A580"
                />
              </Center>
        </div>
      </Form>
    </Container>
  );
};

export default Signup;
