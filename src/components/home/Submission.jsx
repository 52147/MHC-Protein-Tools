import React, { useState, useRef, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./Submission.css";
export const Submission = () => {
  const [education, setEducation] = useState("");
  let [accomplish, setAccomplish] = useState("");
  const MAX_WORD_LIMIT = 300;
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const words = inputValue.split(" ");
    if (words.length <= MAX_WORD_LIMIT) {
      setAccomplish(inputValue);
    }
  };

  return (
    <>
      <h1>Submission</h1>
      <hr class="divider"></hr>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Lorem ipsum dolor</Form.Label>
        <Form.Control
          as="select"
          value={education}
          onChange={(event) => setEducation(event.target.value)}
        >
          <option value="">Select an option</option>
          <option value="1">1</option>
          <option value="2r">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Lorem ipsum dolor sit amet</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="accomplishments"
          value={accomplish}
          onChange={handleInputChange}
        />
        <div>{`${
          accomplish.split(" ").length
        } words out of ${MAX_WORD_LIMIT} words used.`}</div>
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Multiple Selection</Form.Label>
        <Form.Select multiple>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Lorem ipsum</Form.Label>
        <Form.Control
          as="select"
          value={education}
          onChange={(event) => setEducation(event.target.value)}
        >
          <option value="">Select an option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Form.Control>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlTextarea1"
      ></Form.Group>
      <Button variant="outline-info">Submit</Button>{" "}
    </>
  );
};
