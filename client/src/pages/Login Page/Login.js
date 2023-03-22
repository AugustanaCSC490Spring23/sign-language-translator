import {Container, Form, Row, Col} from 'react-bootstrap';
import CusButton from "../../Component/CusButton";
import "./Login.css";

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
 
    return (
        <Container fluid className = "container"  >

                
                <Form className = "form" >
                <div className = "compo">
                    <h1 className = "mb-5 text">Login</h1>
                    <h1 className = "mb-5 text1">Login</h1>
                    <Center>
                        <Form.Control 
                        size = "sm" 
                        type="email" 
                        placeholder="Enter email"  
                        style = {{borderRadius: "25px",  background: "#E7D4B6"}} 
                        />
                    </Center>
                    
                    <Center>
                        <Form.Control 
                        size = "sm"
                        type="password" 
                        placeholder = "Password" 
                        style = {{borderRadius: "25px",  background: "#E7D4B6"}} 
                        />
                    </Center>

                    <Center>
                        <CusButton
                        color = "#C3A580"
                        radius = "25" 
                        title = "Login"/>
                    </Center>

                    <Center>
                        <div style = {{display: "flex", justifyContent: "space-between"}}>
                        <Form.Text>
                            Create Account
                        </Form.Text>
                        <Form.Text>
                            Need Help?
                        </Form.Text>
                        </div>
                        
                    </Center>
                       
                    </div>

                    
                </Form>

            
        </Container>
        )
}

export default Login;