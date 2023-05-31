import instCartLogo from "../embedded/logo.svg";
import { Navbar, Button, Nav } from "react-bootstrap";

export default function TopBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand
        style={{
          margin: "5px 0 0 20px",
        }}
        href="#home"
      >
        <img src={instCartLogo} alt="instacart logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
