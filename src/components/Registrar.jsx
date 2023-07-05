import React, { useState, useEffect } from 'react'

export const Registrar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  }

  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());
  const [color, setColor] = useState("");
  const [marca, setMarca] = useState("");
  const [tipo, setTipo] = useState("");
  const [precio, setPrecio] = useState("");

  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { color, marca, tipo, precio }
    setRegistrosLogin([...registroslogin, miObjeto]);
    limpiarFormulario();
  }

  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin]);

  const limpiarFormulario = () => {
    setColor("");
    setMarca("");
    setTipo("");
    setPrecio("");
    document.getElementById("miFormulario").reset();
  }

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

      <div className="h3">
        Formulario De Registro De Pinturas
        <br />
        <form id="miFormulario" onSubmit={botonGuardar} >
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <input className="form-control form-control-lg text-center" type="text" placeholder="Digite el color" onChange={(e) => setColor(e.target.value)} required />
            </div>

            <div className="col-6">
              <select className="form-select form-select-lg text-center" onChange={(e) => setMarca(e.target.value)} required  >
                <option value="">Indique marca</option>
                <option value="Vogue">Vogue</option>
                <option value="Masglo">Masglo</option>
                <option value="Crystal Nail">Crystal Nail</option>
              </select>
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <select className="form-select form-select-lg text-center" onChange={(e) => setTipo(e.target.value)} required  >
                <option value="">Indique tipo de esmalte</option>
                <option value="Semipermanente">Semipermanente</option>
                <option value="Acrílico">Acrílico</option>
                <option value="Gel">Gel</option>
                <option value="Tradicional">Tradicional</option>
              </select>
            </div>
            <div className="col-6">
              <input className="form-control form-control-lg text-center" type="number" min="1" max="100000000" placeholder="Digite El Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col">
              <button className="btn btn-primary btn-lg">Guardar Datos</button>
            </div>
          </div>
        </form>
      </div>

    </div>


  )
}

export default Registrar
