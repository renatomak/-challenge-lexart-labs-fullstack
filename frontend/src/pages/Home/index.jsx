import React from "react";
import { Container } from "react-bootstrap";
import Cards from "../../components/Cards";
import Form from "../../components/Form";

const Home = () => {
  return (
    <Container>
      <Form />
      <Cards />
    </Container>
  );
};

export default Home;
