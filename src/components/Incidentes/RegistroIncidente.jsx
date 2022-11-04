import React, { useState, useEffect } from 'react'
import FormIncidente from '../Comp/Form/FormIncidente'
import TableCP from '../Comp/Table/TableCP'


const ReporteIncidente = () => {
  
  // const [datosJson, setDatosJson] = React.useState(
  //   [
  //     { "id": "RI001", "descripcion": "No me permite exportar documento", "fecha y hora": "27/09/22 10:45", "estado": "En proceso"},
  //     { "id": "RI002", "descripcion": "Demora en cargar las imágenes", "fecha y hora": "03/09/22 21:22", "estado": "Finalizado"},
  //     { "id": "RI003", "descripcion": "Problemas con las notificaciones", "fecha y hora": "08/09/22 09:02", "estado": "Finalizado"}
  //   ]);
  
  const [executeEffect, setExecuteEffect] = useState(true)
  const [datosJson, setDatosJson] = useState([])

  useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        if (executeEffect) {
            //console.log("Beachan was here!!!");
            getIncidentes();
            setExecuteEffect(false);
        }
  });
  
  const getIncidentes = () => {

        const URL = "http://localhost:4040/reporteincidente/"

        fetch(URL)
        .then(res => res.json())
        .then(dat => {
            setDatosJson(dat); 
            //console.log(options);
        })
    };
  
  const titulosTabla = ["id", "dni", "descripción", "estado", "fecha y hora", "prioridad"]

  function addIncidente(description) {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    let newElem = { "id": `${datosJson.length + 1}`, "dni": "53787865", "descripcion": description, "estado": "En proceso", "fecha y hora": `${date} ${time}`, "prioridad": "Media" };
    //let count = datosJson.push();
    
    //console.log("new count: " + count);
    setDatosJson([...datosJson, newElem]);  
  }

  return (
    <div className='px-5 mt-5'>
      <div>
        <h1 className='uppercase bold'>Reporte de problemas</h1>
        <div className='flex justify-between my-4'>
        <h6 className='mt-7 bold'>Reporte de incidentes</h6>
          <div className='flex' style={{ width: "430px" }}>
          </div>
        </div>
      </div>
      <TableCP titulos={titulosTabla} datos={datosJson} showAction={false}/>
      <h6 className='my-7 bold'>Registrar nuevo problema</h6>
      <FormIncidente addIncidente={addIncidente} />
    </div>
  )
}

export default ReporteIncidente