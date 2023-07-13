import Container from "react-bootstrap/Container";
import Navbar2 from "react-bootstrap/Navbar";

function Navbar() {
  return (
    <Navbar2
      fixed="bottom"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar2.Brand>
          <div style={{ color: "white" }}>
            Permit Follow - Copyright © 2022 - {new Date().getFullYear()}
          </div>
        </Navbar2.Brand>
      </Container>
    </Navbar2>
  );
}

export default Navbar;
