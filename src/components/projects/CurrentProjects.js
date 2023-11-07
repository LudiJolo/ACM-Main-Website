import React from "react";
import { useState } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Collapse,
  Container,
  Carousel,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

import "bootstrap/dist/css/bootstrap.css";
import "./currentprojects.css";

const CurrentProjects = (props) => {
  const [begInfoButton, setBegInfo] = useState("More");
  const [advInfoButton, setAdvInfo] = useState("More");
  const [begOpen, setBegOpen] = useState(false);
  const [advOpen, setAdvOpen] = useState(false);

  const infoButtonHandler = (projType) => {
    if (projType === "beg") {
      setBegOpen(!begOpen);
      if (begOpen) {
        setBegInfo("More");
      } else {
        setBegInfo("Less");
      }
    } else {
      setAdvOpen(!advOpen);
      if (advOpen) {
        setAdvInfo("More");
      } else {
        setAdvInfo("Less");
      }
    }
  };

  return (
    <Container>
      <Row>
        <div
          id="current-header"
          class="projectheader container-fluid text-center py-4"
        >
          <h1>{props.current.semester}</h1>
        </div>
        <Col md={6}>
          <Card border="secondary" className="current-card text-center">
            <Card.Img
              variant="top"
              src={props.current.level.beginners.flyer}
              class="current-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
            />
            <Card.Body>
              <Card.Title className="projtitle shadow mb-3">
                Beginners Workshop
              </Card.Title>
              <Card.Text className="projtext currentDesc p-2">
                Interested in app development? Improve on your critical thinking and programming skills by developing a wordle game in our beginners workshop.
                <Collapse in={begOpen}>
                  <div>
                    <div class="skills-section my-4">
                      <h4 class="skill-header">You will learn:</h4>
                      {props.current.level.beginners.skills.map((skill) => (
                        <div>
                          <Icon.CaretRightFill className="d-inline" />
                          <span>{skill}</span>
                          <Icon.CaretLeftFill className="d-inline" />
                        </div>
                      ))}
                    </div>
                    <div class="leaders-section">
                      <h4 class="leaders-header">Leaders:</h4>
                      <Carousel className="leadercarousel">
                        {props.current.level.beginners.leaders.map(
                          ({ img, name }) => (
                            <Carousel.Item>
                              <img src={img}></img>
                              <Carousel.Caption>
                                <h4 class="leadername">{name}</h4>
                              </Carousel.Caption>
                            </Carousel.Item>
                          )
                        )}
                      </Carousel>
                    </div>
                  </div>
                </Collapse>
              </Card.Text>
              <Button
                onClick={(e) => infoButtonHandler(e.target.value)}
                aria-expanded={begOpen}
                variant="warning"
                size="sm"
                value={"beg"}
              >
                {begInfoButton}
              </Button>
              <Button
                variant="success"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdIf1IzGFR7u8kjlTy4GS_ZQpVcgzdIFavdsSf2A8BAgLcdGQ/viewform"
                size="sm"
                disabled
              >
                Join Now!
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card border="secondary" className="current-card text-center">
            <Card.Img
              variant="top"
              src={props.current.level.advanced.flyer}
              class="current-flyer img-thumbnail shadow-lg mb-5 bg-white rounded"
            />
            <Card.Body>
              <Card.Title className="projtitle shadow mb-3">Advanced Workshop</Card.Title>
              <Card.Text className="projtext currentDesc p-2">
                Interested in game development? In this advanced workshop series, we are
                using C# and Unity game engine to create and implement a 2 dimensional plaform game.
                <Collapse in={advOpen}>
                  <div>
                    <div class="skills-section my-4">
                      <h4 class="skill-header">You will learn:</h4>
                      {props.current.level.advanced.skills.map((skill) => (
                        <div>
                          <Icon.CaretRightFill className="d-inline" />
                          <span>{skill}</span>
                          <Icon.CaretLeftFill className="d-inline" />
                        </div>
                      ))}
                    </div>
                    <div class="leaders-section">
                      <h4 class="leaders-header">Leaders:</h4>
                      <Carousel className="leadercarousel">
                        {props.current.level.advanced.leaders.map(
                          ({ img, name }) => (
                            <Carousel.Item>
                              <img src={img}></img>
                              <Carousel.Caption>
                                <h4 class="leadername">{name}</h4>
                              </Carousel.Caption>
                            </Carousel.Item>
                          )
                        )}
                      </Carousel>
                    </div>
                  </div>
                </Collapse>
              </Card.Text>
              <Button
                variant="warning"
                size="sm"
                onClick={(e) => infoButtonHandler(e.target.value)}
                aria-expanded={advOpen}
                value={"adv"}
                className="shadow"
              >
                {advInfoButton}
              </Button>
              <Button
                variant="success"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdG4hsCiknMPzvGUWOt8aewiYZR7UV_xEDjfcAtyQk3nJ9Vfw/viewform"
                size="sm"
                disabled
              >
                Join Now!
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentProjects;
