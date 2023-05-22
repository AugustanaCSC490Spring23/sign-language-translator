import sleepingPuppy from "../Resources/Images/sleeping-puppy.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

const EmptyPage = ({ message }) => {
  return (
    <Container style={{maxHeight: "100vh"}}>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} md={6} className="text-center">
          <Image
            src={sleepingPuppy}
            alt="Blank Page"
            style={{ maxWidth: "80%", marginBottom: "20px" }}
          />
          <h3>Oops!</h3>
          <p>{message}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default EmptyPage;
