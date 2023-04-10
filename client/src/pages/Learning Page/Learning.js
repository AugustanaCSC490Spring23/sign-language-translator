import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Learning = () => {
  return (
    <CardGroup>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Dictionary</Card.Title>
          <Card.Text>Search words based on letters</Card.Text>
          <Link to="/learning/dictionary">
            <Button variant="outline-dark">Search</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Lessons</Card.Title>
          <Card.Text>Learn sign language by lessons</Card.Text>
          <Link to="/learning/lessons">
            <Button variant="outline-dark">Learn</Button>
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default Learning;
