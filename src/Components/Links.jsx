import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Links = () => {

  return (
    <Navbar
      bg="danger"
      variant="danger"
    >
      <Container className="justify-content-start">
        <Navbar.Brand>Happy Cacke 🍰</Navbar.Brand> 
        <Link
          to="/"
          className="text-white ms-3 text-decoration-none"
        >
          🏠 Home
        </Link>
        <Link
          to="/contacto"
          className="text-white ms-3 text-decoration-none"
        >
          📒 Contacto
        </Link>
      </Container>
    </Navbar>
  );
};

export default Links;