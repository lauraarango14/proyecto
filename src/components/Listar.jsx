import React, { useState, useEffect } from 'react'

export const Listar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  }

  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const botonEliminar = (miIndex) => {
    if (window.confirm("¿Estas seguro que desea eliminar el registro?")) {
      var registrosFiltrados = registroslogin.filter((e, index) => {
        return miIndex !== index
      });
      setRegistrosLogin(registrosFiltrados);
    }
  }

  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin])

  return (
    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

      <div className="h3">
        Listado registro de esmaltes
      </div>

      <div className="table-responsive">

        {registroslogin.length > 0 ?

          <>
            <table className="table table-bordered table-hover" style={{ marginTop: 12 }}>
              <thead className="text-center" style={{ background: "lightgray" }}>
                <tr>
                  <th>#</th>
                  <th>Color</th>
                  <th>Marca</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                  <th>X</th>
                </tr>
              </thead>
              <tbody className="text-center align-baseline">
                {
                  registroslogin.map((x, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{x.color}</td>
                      <td>{x.marca}</td>
                      <td>{x.tipo}</td>
                      <td>{x.precio}</td>
                      <td className='text-center'>
                        <button className='btn btn-outline-danger' onClick={() => botonEliminar(index)}>
                          <i className="bi bi-trash3-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))

                }
              </tbody>
            </table>
          </>
          : <p className='h5' style={{ color: "red" }}>"No hay registros para listar"</p>
        }
      </div>

    </div>

  )
}

export default Listar
