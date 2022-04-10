import React from "react";
import '../css/testimonio.css'

function Testimonial(props) {
  return(
    <div className="contenedor-testimonio">
      <img src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt={`Foto de ${props.nombre}`} className="imagen-testimonial" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
        <p className="texto-testi">{props.testimonio}</p>
      </div>
    </div>
    
  )
}

export default Testimonial

