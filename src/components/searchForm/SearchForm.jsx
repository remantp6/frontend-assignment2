import React, { useState } from "react";
import "./SearchForm.css";
import { Button, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Title from "../title/Title";

const SearchForm = () => {
  const [username, setUsername] = useState("");

  // function to check if username is not empty before creating the link
  const handleClick = () => {
    if (username.trim() !== "") {
      //changes the window location to specified path if username is not empty
      window.location.href = `/userInfo/${username}`;
    }
  };
  return (
    <>
      <div className="search_form">
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100">
          <Title />
          <div className="search_form_field d-flex">
            <FloatingLabel controlId="floatingInput" label="Github Username">
              <Form.Control
                type="text"
                placeholder="Github Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FloatingLabel>
            <Button variant="warning" onClick={handleClick}>
              Generate
            </Button>{" "}
          </div>
        </Container>
      </div>
    </>
  );
};

export default SearchForm;
