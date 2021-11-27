import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Formulario from './components/formulario';
import Formularioini from './components/formulariosimple';
import Cita from './pages/cita';
import Inicio from './pages/inicio';
import Agendamiento from './components/agendamiento';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agendamiento" element={<Agendamiento />} />
         <Route path="/cita" element={<Cita />} /> 
      </Routes>
  );
}

export default App;
