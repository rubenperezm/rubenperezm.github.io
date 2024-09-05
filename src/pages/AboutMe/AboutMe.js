import React from "react";
import { Container, Row } from "react-bootstrap";
import { Header, ExperienceCard } from "../../components";
import aboutMeData from "../../data/AboutMe.json";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <React.Fragment>
      <Header title="About Me" />
      <Container fluid className={styles.textContainer}>
        <p style={{maxWidth: "1000px"}}>
          I am Rubén. I am passionate about technology and I am always looking for new challenges. I am a hard-working person,
          and I like to learn new things every day. Below you can find some of my interests.
        </p>
      </Container>
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {aboutMeData.map((obj, index) => (
            <ExperienceCard
              key={index}
              title={obj.title}
              organization={obj.organization}
              liveUrl={obj.liveUrl}
              urlText={obj.urlText}
              duration={obj.duration}
              description={obj.description}
              logo={obj.logo}
              variant="success"
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AboutMe;
