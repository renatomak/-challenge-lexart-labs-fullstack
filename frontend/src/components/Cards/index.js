import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "../../store/context";
import MeyCard from "../Card";

const Cards = () => {
  const { products } = useContext(Context);

  return (
    <Container>
      <Row>
        {products
          ? products?.map((item, index) => (
              <Col xs={6} md={4} style={{ marginTop: "10px" }} key={index}>
                <MeyCard product={item} />
              </Col>
            ))
          : null}
      </Row>
    </Container>
  );
};

export default Cards;
