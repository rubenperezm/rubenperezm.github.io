import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { ImageHolder } from "..";
import * as Asset from "../../assets";
import styles from "./ExperienceCard.module.css";

const assets = {
  UGR: (
    <ImageHolder
      primarySource={Asset.UGRLogo}
      secondarySource={Asset.FallbackUGRLogo}
      alt="University of Granada"
      className={`card-img ${styles.image}`}
    />
  ),
  UCA: (
    <ImageHolder
      primarySource={Asset.UCALogo}
      secondarySource={Asset.FallbackUCALogo}
      alt="University of Cádiz"
      className={`card-img ${styles.image}`}
    />
  ),
  ESI: (
    <ImageHolder
      primarySource={Asset.ESILogo}
      secondarySource={Asset.FallbackESILogo}
      alt="Engineering School of the University of Cádiz"
      className={`card-img ${styles.image}`}
    />
  ),
  Football: (
    <ImageHolder
      primarySource={Asset.CadizLogo}
      secondarySource={Asset.FallbackCadizLogo}
      alt="Cádiz CF Badge"
      className={`card-img ${styles.image}`}
    />
  ),
  CP: (
    <ImageHolder
      primarySource={Asset.MaxFlow}
      secondarySource={Asset.FallbackMaxFlow}
      alt="Graph"
      className={`card-img ${styles.image}`}
    />
  ),
  Travel: (
    <ImageHolder
      primarySource={Asset.Cathedral}
      secondarySource={Asset.FallbackCathedral}
      alt="Cadiz Cathedral"
      className={`card-img ${styles.image}`}
    />
  ),
};

const ExperienceCard = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleModalOpen = () => setModalDisplay(true);
  const handleModalClose = () => setModalDisplay(false);

  return (
    <Card className={styles.container}>
      {assets[props.logo]}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.organization}
          <br />
          <span style={{ fontWeight: "500" }}>{props.duration}</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer className={styles.footer}>
        {props.liveUrl ? (
          <Button
            className={styles.button}
            variant={props.variant}
            href={props.liveUrl}
            target="_blank"
          >
            {props.urlText || "Visit Website"}
          </Button>
        ) : null}
        {props.description ? (
          <React.Fragment>
            <Button
              className={styles.button}
              variant="secondary"
              onClick={handleModalOpen}
            >
              View More
            </Button>
            <Modal
              centered
              size="lg"
              show={modalDisplay}
              onHide={handleModalClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>{props.organization}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{ textAlign: "center" }}>
                  <h4>{props.title}</h4>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h5>{props.duration}</h5>
                </div>
                <ul>
                  {props.description.map((elem, idx) => (
                    <li key={idx}>{elem}</li>
                  ))}
                </ul>
              </Modal.Body>
            </Modal>
          </React.Fragment>
        ) : null}
      </Card.Footer>
    </Card>
  );
};

export default ExperienceCard;
