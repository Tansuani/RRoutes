import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Links = () => {

  return (
    <Navbar
      bg="pink"
      variant="pink"
    >
      <Container className="justify-content-start">
        <Navbar.Brand>Happy <strong>Cacke</strong></Navbar.Brand>
        <Link
          to="/"
          className="text-red ms-3 text-decoration-none"
        >
          Home
        </Link>
        <Link
          to="/contacto"
          className="text-red ms-3 text-decoration-none"
        >
          Contacto
        </Link>
      </Container>
    </Navbar>
  );
};

export default Links;