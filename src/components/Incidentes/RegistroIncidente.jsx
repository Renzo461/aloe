import React from 'react'
import FormIncidente from '../Comp/Form/FormIncidente'
import TableCP from '../Comp/Table/TableCP'


const ReporteIncidente = () => {
  
  const datosJson = 
    [
      { "id": "RI001", "descripcion": "No me permite exportar documento", "fecha y hora": "27/09/22 10:45", "estado": "En proceso"},
      { "id": "RI002", "descripcion": "Demora en cargar las imágenes", "fecha y hora": "03/09/22 21:22", "estado": "Finalizado"},
      { "id": "RI003", "descripcion": "Problemas con las notificaciones", "fecha y hora": "08/09/22 09:02", "estado": "Finalizado"}
    ]
  
  const titulosTabla = ["id", "descripción", "fecha y hora", "estado"]

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
      <FormIncidente/>
    </div>
  )
}

export default ReporteIncidente