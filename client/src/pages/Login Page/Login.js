import {useState} from "react";
import axios from "axios";
import {Container, Form, Row, Col, Button, InputGroup, FloatingLabel} from 'react-bootstrap';
import CusButton from "../../Component/CusButton";
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Center = ({children}) => {
    return (
        <Row className = "mb-3">
            <Col md = {{span: 6, offset: 3}}>
                {children}
                
            </Col>

        </Row>
    )
}



const Login = () => {
    const [name, setName] = useState({name: ""});

    const handleChange = (e) => {
        e.preventDefault();
        setName({name: e.target.value})
        
    }

    const submitForm = (e) => {
        e.preventDefault();
        
        axios
        .post(`https://jsonplaceholder.typicode.com/users`, { name })
        .then((res) => {
        // console.log(res);
        console.log(res.data);
        });
    }
 
    return (
        <Container fluid className = "container"  >

                
                <Form className = "form" onSubmit = {submitForm}>
                <div className = "compo">
                    <h1 className = "mb-5 text">Login</h1>
                    <Center>
                        {/* <InputGroup> */}
                        {/* <InputGroup.Text><FontAwesomeIcon icon="fa-regular fa-circle-user" /></InputGroup.Text> */}

                        <Form.Control 
                        type="email" 
                        placeholder="Enter email"  
                        style = {{borderRadius: "25px",  background: "#E7D4B6", boxShadow: "none", border: "none"}} 
                        className = "input"
                        onChange = {handleChange}
                        />
                        {/* </InputGroup> */}
                    </Center>

                    <Center>
                        <Form.Control 
                        type="password" 
                        placeholder = "Password" 
                        style = {{borderRadius: "25px",  background: "#E7D4B6", boxShadow: "none", border: "none"}} 
                        className = "input"
                        />
                    </Center>

                    <Center>
                        <CusButton
                        bgcolor = "#C3A580"
                        color = "#3E1408"
                        radius = "25" 
                        title = "Login"
                        weight = "750"/>
                    </Center>

                    <Center>
                        <div style = {{display: "flex", justifyContent: "space-between"}}>
                        <Form.Text>
                            <a className = "link" href = "https://www.w3schools.com/cssref/tryit.php?filename=trycss_sel_link_more1">
                            Create Account
                            </a>
                        </Form.Text>

                        <Form.Text>
                            <a className = "link" href = "">
                                Need Help?
                            </a>
                        </Form.Text>
                        </div>
                        
                    </Center>
                       
                    </div>

                    
                </Form>

            
        </Container>
        )
}

export default Login;