import React, { useState } from 'react'
import ButtonPS from '../Comp/ButtonPS'
import FormNodo from './FormNodo'
import InputCP from '../Comp/InputCP'
import TableCP from '../Comp/Table/TableCP'
import Eliminar from './Eliminar'
import Detalle from './Detalle'
import Actualizar from './Actualizar'
import { useEffect } from 'react'

const Nodo = () => {
  const [opacidad, setopacidad] = useState(false)
  const verAgregar = () => {
    setopacidad(!opacidad)
  }

  const [eliminar, seteliminar] = useState(false)
  const verEliminar = () => {
    seteliminar(!eliminar)
  }

  const [detalle, setdetalle] = useState(false)
  const verDetalle = () => {
    setdetalle(!detalle)
  }

  const [actualizar, setactualizar] = useState(false)
  const verActualizar = () => {
    setactualizar(!actualizar)
  }
  const [datosJson, setdatosJson] = useState([])

  useEffect(() => {
    obtenerEB()
  }, [])

  const obtenerEB = () => {
    const URL = "http://192.168.1.40:4040/nodo/"
    fetch(URL)
      .then(res => res.json())
      .then(dat => setdatosJson(dat))
  }
  const buscarEB = (id) => {
    const URL = "http://192.168.1.40:4040/nodo/" + id
    fetch(URL)
      .then(res => res.json())
      .then(dat => setdatosJson(dat))
  }


 
  const titulosTabla = ["id","ubicación", "placa", "ip", "mascara", "gateway","bateria","modo","distancia", "Est.Base", "Acciones"]
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
      <TableCP titulos={titulosTabla} datos={datosJson} eliminar={verEliminar} detalle={verDetalle} actualizar={verActualizar} />
      <FormNodo visible={opacidad} funcion={verAgregar} />
      <Eliminar visible={eliminar} funcion={verEliminar} />
      <Detalle visible={detalle} detalle={verDetalle} />
      <Actualizar visible={actualizar} actualizar={verActualizar} />


    </div>
  )
}

export default Nodo