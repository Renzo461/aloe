import React, { useState } from 'react'
import ButtonPS from '../Comp/ButtonPS'
import FormCP from '../Comp/Form/FormCP'
import InputCP from '../Comp/InputCP'
import TableCP from '../Comp/Table/TableCP'
import Eliminar from './Eliminar'
import Detalle from './Detalle'
import Actualizar from './Actualizar'





const Nodo = () => {
  const [opacidad, setopacidad] = useState(false)

  const verAgregar = () =>{
    setopacidad(!opacidad)
    console.log(opacidad)
  }

  const [eliminar, seteliminar] = useState(false)
  const verEliminar = () => {
      seteliminar(!eliminar)
      console.log(eliminar)
    }

    const [detalle, setdetalle] = useState(false)
    const verDetalle = () => {
        setdetalle(!detalle)
        console.log(detalle)
      }    
    
      const [actualizar, setactualizar] = useState(false)
      const verActualizar = () => {
          setactualizar(!actualizar)
          console.log(actualizar)
        }    


  const datosJson = [
    { "idNo": "ND001", "descripcionNo": "Sensor de Humedad", "ubicacionNo": "Av. Sal si puedes", "modeloNo": "MB8611", "ipNo": "192.168.174.25", "nivelNo": "70%", "modoNo": "Sleep" , "EstNo": "EB001"},
    { "idNo": "ND002", "descripcionNo": "Sensor de Humedad", "ubicacionNo": "Av. Andes", "modeloNo": "MB8613", "ipNo": "192.168.174.14", "nivelNo": "80%", "modoNo": "Active" , "EstNo": "EB001"},
    { "idNo": "ND003", "descripcionNo": "Sensor de Humedad", "ubicacionNo": "Av. San Carlos", "modeloNo": "MB8620", "ipNo": "192.168.174.140", "nivelNo": "50%", "modoNo": "Active" , "EstNo": "EB001"},
  ]
  const titulosTabla = ["id", "descripción", "ubicación", "modelo", "ip", "nivel", "modo","Est.Base","Acciones"]
  return (
    <div className='px-5 mt-5'>
      <div>
        <h1 className='bold uppercase'>NODOS:</h1>
        <div className='flex justify-between my-4'>
          <InputCP label="Buscar:" placeholder="ND001" id="eb" />
          <div className='flex' style={{ width: "430px" }}>
            <div className='flex-1'>
              <ButtonPS estilo="primario" texto="agregar" espacio={"mr-5"} funcion={verAgregar} />
            </div>
            <div className='flex-1'>
              <ButtonPS estilo="secundario" texto="Ver mapa" />
            </div>
            
          </div>
        </div>
      </div>
      <TableCP titulos={titulosTabla} datos={datosJson} funcion={verEliminar} detalle={verDetalle} actualizar={verActualizar} />
      <FormCP visible={opacidad} funcion={verAgregar}/>
      <Eliminar visible={eliminar} funcion={verEliminar}/>
      <Detalle visible={detalle} detalle={verDetalle}/>
      <Actualizar visible={actualizar} actualizar={verActualizar}/>
      

    </div>
  )
}

export default Nodo