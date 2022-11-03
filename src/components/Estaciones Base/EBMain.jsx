import React, { useEffect, useState } from 'react'
import ButtonPS from '../Comp/ButtonPS'
import FormCP from '../Comp/Form/FormCP'
import InputCP from '../Comp/InputCP'
import TableCP from '../Comp/Table/TableCP'
import EBActualizar from './EBActualizar'
import EBAgregar from './EBAgregar'


const EBMain = () => {
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
    const URL = "http://192.168.1.40:4040/estacionbase/"
    fetch(URL)
      .then(res => res.json())
      .then(dat => setdatosJson(dat))
  }
  const buscarEB = (id) => {
    const URL = "http://192.168.1.40:4040/estacionbase/" + id
    fetch(URL)
      .then(res => res.json())
      .then(dat => setdatosJson(dat))
  }
  const titulosTabla = ["id", "fábrica", "ubicación", "modelo", "nº nodos", "ip", "mascara", "dns", "acciones"]
  return (
    <div className='px-5 mt-5'>
      <div>
        <h1 className='uppercase bold'>Estaciones base</h1>
        <div className='flex justify-between my-4'>
          <form>
            <InputCP label="Buscar:" placeholder="EB001" id="eb" onKeyUp={buscarEB} />
          </form>
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
      <TableCP titulos={titulosTabla} datos={datosJson} eliminar={verEliminar} actualizar={verActualizar} detalle={verDetalle} />
      <EBAgregar visible={opacidad} agregar={verAgregar} />
      <EBActualizar visible={actualizar} ver={verActualizar}/> 
    </div>
  )
}

export default EBMain