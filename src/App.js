import React from "react";
import "./css/home.css";
import { Container, Row, Col, Badge } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center main-heading text-black font-weight-bold m-auto">
              UML Test Case Generator
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4 text-center  sub-heading">
            A simple test case generator for UML diagrams built in React, Nodejs
            and Express server bindings.
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12} className="left-col">
            <h4 className="text-center">Process</h4>
            <div className="mt-2 divprops">
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    1
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">
                    Use any standard tool to generate UML diagram. Do not make
                    any fancy changes in UML diagrams. For example -> do not put
                    square brackets [ ] to conditions in activity diagram.
                    Please refer the diagrams given in 'extra-files' folder and
                    draw accordingly.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    2
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">
                    Generate XMI of UML diagram from the tool using 'export XMI'
                    option.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    3
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">
                    Upload the XMI file in the UML Test Case Generator.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    4
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">Generate Paramater Values.</p>
                </Col>
              </Row>
              <Row>
                <Col xs={2} md={2} lg={2}>
                  <Badge pill variant="primary" className="ml-2">
                    5
                  </Badge>{" "}
                </Col>
                <Col className="text-left" xs={10} md={10} lg={10}>
                  <p className="text-left">
                    Download Excel Sheet of Paramater Values for further
                    computations.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={12} lg={12} className="right-col">
            <h4 className="text-center">Local Usage</h4>
            <div className="mt-2 divprops">
              <Row>
                <Col className="text-left">
                  <p className="text-left">
                    <span className="comment">
                      &#47;&#47; donwload Link (Sequence Diagram) <br />
                    </span>
                    <samp>
                      https://github.com/mayuraitavadekar/uml-sequence-test-case-generator
                    </samp>
                  </p>
                  <p className="text-left">
                    <span className="comment">
                      &#47;&#47; donwload Link (Activity Diagram) <br />
                    </span>
                    <samp>
                      https://github.com/mayuraitavadekar/uml-activity-test-case-generator
                    </samp>
                  </p>
                  <p className="text-left">
                    <span className="comment">
                      &#47;&#47; otherwise clone or donwload git repository{" "}
                      <br />
                    </span>
                    <samp>
                      git clone
                      "https://github.com/mayuraitavadekar/uml-seq-test-case-generator.git"
                    </samp>
                  </p>
                  <p className="text-left">
                    <span className="comment mt-3">
                      After download/clone, move into server1 folder type:{" "}
                      <br />
                    </span>
                    <samp>
                      cd server1 <br />
                      npm install <br />
                      sudo npm start <br />
                    </samp>
                  </p>
                  <p className="text-left">
                    <span className="comment mt-3">
                      &#47;&#47; After that move into frontend folder type:{" "}
                      <br />
                    </span>
                    <samp>
                      cd frontend <br />
                      npm install <br />
                      sudo npm start
                    </samp>
                  </p>
                  <p className="text-left">
                    <span className="comment mt-3">
                      &#47;&#47; Open browser and type: <br />
                    </span>
                    <samp>http://localhost:3000/</samp>
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p className="m-auto text-center">
              Distributed under License:{" "}
              <a href="https://github.com/mayuraitavadekar/uml-sequence-test-case-generator/blob/master/LICENSE">
                Apache License 2.0
              </a>{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
