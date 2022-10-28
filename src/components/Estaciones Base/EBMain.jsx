import React, { useEffect, useState } from 'react'
import ButtonPS from '../Comp/ButtonPS'
import FormCP from '../Comp/Form/FormCP'
import InputCP from '../Comp/InputCP'
import TableCP from '../Comp/Table/TableCP'


const EBMain = () => {
  const [opacidad, setopacidad] = useState(false)
  const [datosJson, setdatosJson] = useState([])
  const verAgregar = () => {
    setopacidad(!opacidad)
    console.log(opacidad)
  }

  useEffect(() => {
    obtenerEB()
  }, [])

  const obtenerEB = () => {
    const URL = "http://192.168.101.9:4040"
    fetch(URL)
      .then(res => res.json())
      .then(dat => setdatosJson(dat))
  }
  const buscarEB = (id) => {
    const URL = "http://192.168.101.9:4040/" + id
    fetch(URL)
      .then(res => res.json())
      .then(dat => setdatosJson(dat))
  }
  const titulosTabla = ["id", "descripción", "ubicación", "modelo", "nº nodos", "ip", "mascara", "acciones"]
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
      <TableCP titulos={titulosTabla} datos={datosJson} />
      <FormCP visible={opacidad} funcion={verAgregar} />
    </div>
  )
}

export default EBMain