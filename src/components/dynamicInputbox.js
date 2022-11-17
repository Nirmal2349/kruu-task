import React from 'react'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";



function DynamicInputbox({
  name,
  type,
  label,
  placeholder = "Please write here",
  options
}) {
  return (
    <div className="form_cont">
      {/* <Form> */}
      <InputGroup>
        <InputGroup.Text id="basic-addon3">{label}</InputGroup.Text>
        {type !== "options" ? (
          <Form.Control
            aria-describedby="basic-addon3"
            placeholder={placeholder}
            id={name}
            type={type}
          />
        ) : (
          <Form.Select aria-label="Default select example">
            <option>{placeholder}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </Form.Select>
        )}
      </InputGroup>
      {/* </Form> */}
    </div>
  );
}

export default DynamicInputbox;