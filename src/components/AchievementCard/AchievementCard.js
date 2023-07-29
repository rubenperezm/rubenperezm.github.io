import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import styles from "./AchievementCard.module.css";

const AchievementCard = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalOpen = () => setModalDisplay(true);
  const handleModalClose = () => setModalDisplay(false);

  return (
    <Card className={styles.container}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> {props.organization}</Card.Subtitle>
      </Card.Body>
      {props.description ? (
        <Card.Footer className={styles.footer}>
          <React.Fragment>
            {props.url ? (
              <Button
                className={styles.button}
                variant={props.variant}
                href={props.url}
                target="_blank"
              >
                View More
              </Button>
            ) : null
            }
            <Button
              className={styles.button}
              variant="secondary"
              onClick={handleModalOpen}
            >
              View Description
            </Button>
            <Modal centered show={modalDisplay} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{props.description}</Modal.Body>
            </Modal>
          </React.Fragment>
          </Card.Footer>
        ) : null}

    </Card>
  );
};

export default AchievementCard;
