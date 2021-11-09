import React from "react";
import { Button, Card } from "react-bootstrap";

const MeyCard = (props) => {
  const { permalink, price, thumbnail, title, id } = props.product;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={thumbnail}
        style={{ height: "200px", width: "200px", margin: "0 auto" }}
      />
      <Card.Body>
        <Card.Title>Código: {id}</Card.Title>
        <Card.Text>{title}</Card.Text>
        <Card.Text>R$ {price}</Card.Text>

        <a href={permalink} target="_blank" rel="noreferrer">
          <Button variant="primary">Ir a web</Button>
        </a>
      </Card.Body>
    </Card>
  );
};

export default MeyCard;
