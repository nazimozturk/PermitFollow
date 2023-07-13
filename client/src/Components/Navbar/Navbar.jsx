import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar2 from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <Navbar2 collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar2.Brand>
          <Link to="/" className="link">
            <div className="menuItem">Logo</div>
          </Link>
        </Navbar2.Brand>
        <Navbar2.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar2.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="link">
                <div className="menuItem">Home</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/PermitList" className="link">
                <div className="menuItem">Permit List</div>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/PersonelList" className="link">
                <div className="menuItem">Personel List</div>
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey="3">
              <Link to="/Admin" className="link">
                <div className="menuItemAdmin">Admin</div>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar2.Collapse>
      </Container>
    </Navbar2>
  );
}

export default Navbar;
