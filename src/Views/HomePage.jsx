import { Container } from "react-bootstrap";

const HomePage = () => {
    
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">Happy Cake</span>
      </h1>
      <h6> El lugar de los pasteles felices </h6>
      <img src="./src/img/torta.svg" alt="imagen de torta" />
    </Container>
  );
};

export default HomePage;