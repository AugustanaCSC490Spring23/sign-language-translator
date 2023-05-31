import React from "react";
import styles from "./Resources.module.css";
import { Button, Container } from "react-bootstrap";
import handTogether from "../../assets/Hand-together.jpg";

function Resources() {
  return (
    <Container fluid className={styles.resourcesContainer}>
      <div className={styles.textContain}>
        <h2>Resources for learning sign language</h2>
        <p>
          <b>National Association of the Deaf (NAD):</b> The National
          Association of the Deaf (NAD) is the nation's premier civil
          rights organization of, by and for deaf and hard of hearing
          individuals in the United States of America. The association
          provide reliable sources of learning and teaching sign
          language for both children and parents. Highly
          recommended!!!
        </p>
        <Button className={styles.browse_resources}>More</Button>
      </div>
    </Container>
  );
}

export default Resources;
