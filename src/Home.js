import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <section id="home">
        <div class="container-fluid px-0 top-banner">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-6">
                <h1>A Javascript library</h1>
                <h1> for building User Interfaces.</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
