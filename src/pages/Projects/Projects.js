import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Header, ProjectCard } from "../../components";
import projectsData from "../../data/Projects.json";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <React.Fragment>
      <Header title="Projects" />
      <Container fluid className={styles.container}>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button className={styles.button} variant="primary" href="https://github.com/rubenperezm?tab=repositories" target="_blank">
            View all projects on GitHub
          </Button>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {projectsData.map((obj, index) => (
            <ProjectCard
              key={index}
              title={obj.title}
              content={obj.content}
              gitHubUrl={obj.gitHubUrl}
              liveUrl={obj.liveUrl}
              techStack={obj.techStack}
            />
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Projects;
