import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
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
        <Navbar.Brand as={Link} to="/home">
          MHC Tool
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/research">
              Research
            </Nav.Link>
            <NavDropdown
              className="custom-dropdown"
              title="Publications"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Publication 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Publication 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Publication 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#collaboration">Collaboration</Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
