import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Navigation() {
  return (
    <div className="Nav">
      <Navbar expand="s">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link href="#home" className="links">
              home
            </Nav.Link>
            <Nav.Link href="#link" className="links">
              about
            </Nav.Link>
            <Nav.Link href="#home" className="links">
              projects
            </Nav.Link>
            <Nav.Link href="#link" className="links">
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
