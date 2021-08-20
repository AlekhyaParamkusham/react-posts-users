import React from "react";
import ReactDOM from "react-dom";
import {
  Navbar,
  Table,
  Button,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";

import Home from "./Home";
import Posts from "./Posts";
import About from "./About";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Router>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              <i class="fa fa-home" aria-hidden="true"></i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/home">
                  Home
                </Link>

                <Link className="nav-link" to="/posts">
                  Posts
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
