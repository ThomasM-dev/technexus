import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import "./HeroBanner.css";


const HeroBanner = () => {
  return (
    <section
      style={{ position: "relative", height: "600px", marginTop: "25px" }}
      className="text-white rounded-4 overflow-hidden container "
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/herobanner.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row style={{ marginLeft: "15px" }}>
            <Col md={8} lg={6}>
              <span
                style={{
                  backgroundColor: "#132242",
                  color: "#2356d6",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: "600"
                }}
              >
                NEW ARRIVAL
              </span>


              <h1 className="fw-bold mt-3" style={{ fontSize: "50px" }}>
                Future-Proof Your <br /><span className="text-primary">Setup</span>
              </h1>

              <p className="mt-3" style={{ color: "#c6c6d0", fontSize: "25px" }}>
                Experience the next generation of performance with our exclusive
                range of high-end hardware and premium peripherals.
              </p>

              <div className="mt-4 d-flex gap-3">
                <button className="btn btn-primary custom-primary-btn">
                  Shop Now <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                  </svg>
                </button>

                <button className="btn custom-secondary-btn">
                  Learn More
                </button>

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;
