import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { CELULAR, Context, GELADEIRA, TV } from "../../store/context";

const Select = (props) => {
  const { options } = props;
  const { setSelectCategory } = useContext(Context);

  const setSelectedCategory = ({ target }) => {
    const { value } = target;
    if (value === "Geladeira") setSelectCategory(GELADEIRA);
    if (value === "TV") setSelectCategory(TV);
    if (value === "Celular") setSelectCategory(CELULAR);
  };

  return (
    <Form.Select onChange={setSelectedCategory}>
      {options?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </Form.Select>
  );
};

export default Select;
