import { Container, Form } from "react-bootstrap";

const ContactPage = () => {
    
  return (
    <Container className="text-center">
        <h1 className="pt-5">
            Cuentanos, ¿en qué te podemos ayudar?
        </h1>
        <Form >
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Correo:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Descripción:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-danger">Enviar</button>
        </Form>
    </Container>
  );
};

export default ContactPage;