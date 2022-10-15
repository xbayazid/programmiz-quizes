import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import "./Quizes.css";

const Quizes = ({ quizes }) => {
  const { logo, name, id } = quizes;
  return (
    <div>
      <Col className="">
        <Card className="card">
          <Card.Img className="logo-bg" variant="top" src={logo} />
          <Card.Body>
            <div className="d-flex justify-content-between mt-3">
              <div>
                <Card.Title>{name}</Card.Title>
              </div>
              <div className="quizes-btn">
                  <Link to={`/quiz/${id}`} className="rounded border-0 bg-dark">
                    Start Quiz
                   <ArrowSmallRightIcon className="arrow-btn"></ArrowSmallRightIcon>
                  </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Quizes;
