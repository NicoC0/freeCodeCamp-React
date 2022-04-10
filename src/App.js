import './App.css';
import Testimonial from "./components/Testimonial" 
import { testimonials } from "./constants/testimonials"

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {testimonials.map(({nombre, pais, imagen, cargo, empresa, testimonio}, index) => {
          return(
            <Testimonial key={index} nombre={nombre} pais={pais} imagen={imagen} cargo={cargo} empresa={empresa} testimonio={testimonio} />
          )
        })}
        
      </div>
    </div>
  );
}

export default App;


