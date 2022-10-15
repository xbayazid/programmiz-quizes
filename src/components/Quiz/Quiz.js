import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Quizes from "../Quizes/Quizes";
import "./Quiz.css";

const Quiz = () => {
  const quiz = useLoaderData();
  const data = quiz.data;
  return (
    <div className="quizes-container">
        <h2 className="mt-5 border-style">Prectise makes a man perfect. So, Work hard & shine in life</h2>
      <div>
        <Container className="mt-5 me">
          <Row xs={1} md={2} className="g-4">
            {data.map((quizes) => (
              <Quizes key={quizes.id} quizes={quizes}></Quizes>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Quiz;
