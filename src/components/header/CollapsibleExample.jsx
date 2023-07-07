import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Header.css";
import { Link } from "react-router-dom";

export function CollapsibleExample() {
  return (
    <Navbar
      className="custom-navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          MHC Tool
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/research">
              Research
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              News
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#collaboration">Collaboration</Nav.Link>
            <Nav.Link className="contact" as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
