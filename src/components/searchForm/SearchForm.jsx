import React from "react";
import "./SearchForm.css";
import { Button, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Title from "../title/Title";

const SearchForm = () => {
  return (
    <>
      <div className="search_form">
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
          <Title/>
          <div className="search_form_field d-flex">
            <FloatingLabel
              controlId="floatingInput"
              label="Github Username"
            >
              <Form.Control type="text" placeholder="Github Username" />
            </FloatingLabel>
            <Button variant="warning">Generate</Button>{" "}
          </div>
        </Container>
      </div>
    </>
  );
};

export default SearchForm;
