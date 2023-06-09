import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";

export function CollapsibleExample() {
  return (
    <Navbar
      className="custom-navbar"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">MHC Tool</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#research">Research</Nav.Link>
            <NavDropdown className="custom-dropdown" title="Publications" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Publication 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Publication 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Publication 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#collaboration">Collaboration</Nav.Link>
            <Nav.Link eventKey={2} href="about">
            About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
