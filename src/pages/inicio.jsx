import { Form,Button } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Cita() {
    return  (

        
        
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>USUARIO</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
   </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>CONTRASENA</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="POLITICA DE DATOS" />
  </Form.Group>
  <Link to="/Cita">
  <Button variant="primary" type="submit">
    INGRESAR
  </Button>
  </Link>
  <Link to="/Cita">
  <Button variant="primary" type="submit">
    REGISTRATE
  </Button>
  </Link>
</Form>

    );
}

export default Cita;