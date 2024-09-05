import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = (props) => {
  const backgroundStyle = {
    "Projects": styles.projects,
    "Experience": styles.experience,
    "About Me": styles.aboutMe,
    "Achievements": styles.achievements,
  };
  return (
    <Container
      fluid
      className={`${styles.container} ${backgroundStyle[props.title]}`}
    >
      <Row>
        <h1 className={styles.headingOne}>{props.title}</h1>
      </Row>
    </Container>
  );
};

export default Header;
