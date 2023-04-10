import { useState } from "react";
import { Card, Form, InputGroup, Button } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Jumbotron.css";

function Jumbotron() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // handle search functionality here
  };

  return (
    <Card className="jumbotron">
      <Card.Body>
        <Card.Title>Dictionary</Card.Title>
        <Form onSubmit={handleSearch}>
          <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button variant="outline-secondary" type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
          </InputGroup>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Jumbotron;
