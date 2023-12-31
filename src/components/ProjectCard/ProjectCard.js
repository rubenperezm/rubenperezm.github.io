import React from "react";
import { Card, Button } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import { Icon } from '@iconify/react';
import styles from "./ProjectCard.module.css";

const assets = {
  "ChatbotSQL": (
    <ImageHolder
      primarySource={Asset.ChatbotSQL}
      secondarySource={Asset.FallbackChatbotSQL}
      alt="ChatbotSQL"
      className={"card-img " + styles.img}
    />
  ),
  "ROBDA": (
    <ImageHolder
      primarySource={Asset.Robda}
      secondarySource={Asset.FallbackRobda}
      alt="ROBDA"
      className={"card-img " + styles.img}
    />
  ),
  "Sudoku Solver": (
    <ImageHolder
      primarySource={Asset.Sudoku}
      secondarySource={Asset.FallbackSudoku}
      alt="Sudoku Solver"
      className={"card-img " + styles.img}
    />
  ),
};

const icons = {
  React: <Icon icon="devicon:react" key={1} className={styles.icon} />,
  NextJS: <Icon icon="devicon:nextjs" key={2} className={styles.icon} />,
  NodeJS: <Icon icon="devicon:nodejs" key={3} className={styles.icon} />,
  Matlab: <Icon icon="devicon:matlab" key={4} className={styles.icon} />,
  MySQL: <Icon icon="devicon:mysql" key={5} className={styles.icon} />,
  PHP: <Icon icon="devicon:php" key={6} className={styles.icon} />,
  Python: <Icon icon="devicon:python" key={7} className={styles.icon} />,
};

const ProjectCard = (props) => {
  return (
    <Card className={styles.container}>
      {assets[props.title]}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.techStack.map((tech, index) => icons[tech])}
        </Card.Text>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
      <Card.Footer className={styles.footer}>
      {props.liveUrl ? (
          <Button
            className={styles.button}
            variant="primary"
            href={props.liveUrl}
            target="_blank"
          >
            View Live
          </Button>
        ) : null}
        {props.gitHubUrl ? (
          <Button
            className={styles.button}
            variant="dark"
            href={props.gitHubUrl}
            target="_blank"
          >
            View on GitHub
          </Button>
        ) : null}
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
