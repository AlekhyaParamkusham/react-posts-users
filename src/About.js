import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import { Modal, Button, Offcanvas, Carousel } from "react-bootstrap";
import React1 from "./images/react-meme1_.png";
import React2 from "./images/react-2.jpg";
import React3 from "./images/JSX.png";

const About = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section id="home">
        <div className="container-fluid px-0 about-banner ">
          <Button className="btnAbout" variant="danger" onClick={handleShow}>
            Few React Topics
          </Button>
          <Button
            className="btnAbout"
            variant="danger"
            onClick={() => setShow2(true)}
          >
            Time for some fun!
          </Button>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="comments">Few Topics</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul>
              <li>
                <a
                  href="https://reactjs.org/docs/components-and-props.html"
                  target="_blank"
                >
                  React Components & Props
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/docs/state-and-lifecycle.html"
                  target="_blank"
                >
                  React State & LifeCycle
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/docs/hooks-intro.html#:~:text=%20Introducing%20Hooks%20%201%20Video%20Introduction.%20At,We%20know%20that%20React%20developers%20are...%20More%20"
                  target="_blank"
                >
                  React Hooks
                </a>
              </li>
              <li>
                <a
                  href="https://seegatesite.com/tutorial-on-react-router-dom-for-beginners/"
                  target="_blank"
                >
                  React Router
                </a>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>

        <Modal
          show={show2}
          onHide={() => setShow2(false)}
          dialogClassName="modal-90w"
          aria-labelledby="comments"
        >
          <Modal.Body>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={React1}
                  alt="First slide"
                  width="300px"
                  height="350px"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={React2}
                  alt="Second slide"
                  width="300px"
                  height="350px"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={React3}
                  alt="Third slide"
                  width="300px"
                  height="350px"
                />
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};

export default About;
