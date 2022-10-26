import React from 'react'
import ButtonPS from '../Comp/ButtonPS'
import InputCP from '../Comp/InputCP'
import TableCP from '../Comp/Table/TableCP'


const EBMain = () => {
  const datosJson = {
    "eb": [
      { "id": "EB001", "descripcion": "Fábrica de metales", "ubicacion": "Av. Sal si puedes", "modelo": "MB8611", "nodos": "10", "ip": "192.168.174.25", "mascara": "255.255.255.255" },
      { "id": "EB002", "descripcion": "Fábrica de metales", "ubicacion": "Av. Sal si puedes", "modelo": "MB8611", "nodos": "10", "ip": "192.168.174.25", "mascara": "255.255.255.255" },
      { "id": "EB003", "descripcion": "Fábrica de metales", "ubicacion": "Av. Sal si puedes", "modelo": "MB8611", "nodos": "10", "ip": "192.168.174.25", "mascara": "255.255.255.255" }
    ]
  }
  const titulosTabla = ["id", "descripción", "ubicación", "modelo", "nº nodos", "ip", "mascara", "acciones"]
  return (
    <div className='px-5 mt-5'>
      <div>
        <h1 className='bold uppercase'>Estaciones base</h1>
        <div className='flex justify-between my-4'>
          <InputCP label="Buscar:" placeholder="EB001" id="eb" />
          <div className='flex' style={{ width: "430px" }}>
            <div className='flex-1'>
              <ButtonPS estilo="primario" texto="agregar" espacio={"mr-5"} />
            </div>
            <div className='flex-1'>
              <ButtonPS estilo="secundario" texto="Ver mapa" />
            </div>
          </div>
        </div>
      </div>
      <TableCP titulos={titulosTabla} datos={datosJson} />
      <FormCP/>
    </div>
  )
}

export default EBMain