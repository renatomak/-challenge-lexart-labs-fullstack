import React, { useContext, useEffect, useState } from "react";
import {
  FormControl,
  InputGroup,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Context } from "../../store/context";
import Select from "../Select";

const Form = () => {
  const optionsWeb = ["Web", "Todas", "Mecado Livre", "Buscapé"];
  const optionsCategories = ["Categoria", "Geladeira", "TV", "Celular"];

  const { products, selectCategory, getListProducts } = useContext(Context);

  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    getListProducts(selectCategory, inputQuery);
    console.log("PRODUCTS: ", products);
  }, [selectCategory, inputQuery]);

  const handleClick = () => {
    getListProducts(selectCategory, inputQuery);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Select options={optionsWeb} />
        </Col>
        <Col>
          <Select options={optionsCategories} />
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Text input with dropdown button"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col>
          <Button variant="primary" onClick={handleClick}>
            Primary
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Form;
