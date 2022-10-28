import React from 'react'
import ButtonPS from '../Comp/ButtonPS'
import FormInformECA from '../Comp/Form/FormInformECA'
import InputCP from '../Comp/InputCP'
import TableCP from '../Comp/Table/TableCP'


const InformECA = () => {

  const datosJson = 
    [
      { "id": "", "descripcion": "Valor anual de concentración de plomo", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Material particulado con diámetro menor a 2,5 micras", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Material particulado con diámetro menor a 10 micras", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Dióxido de Azufre", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Dióxido de Nitrógeno", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Mercurio Gaseoso Total", "fecha y hora": "", "estado": ""}
    ]
  
  const datosFabricas = 
    [
      { "id": "", "descripcion": "Valor anual de concentración de plomo", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Material particulado con diámetro menor a 2,5 micras", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Material particulado con diámetro menor a 10 micras", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Dióxido de Azufre", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Dióxido de Nitrógeno", "fecha y hora": "", "estado": ""},
      { "id": "", "descripcion": "Mercurio Gaseoso Total", "fecha y hora": "", "estado": ""}
    ]
  
  const titulosTabla = ["", "Estándares de calidad ambiental", "", ""]
  const fabricasTabla = ["", "Fábricas que cuentan con ECAs", "", ""]
  
  return (
    <div className='px-5 mt-5'>
      <div>
        <h3 className='bold uppercase text-center'>Información de Estándares de Calidad Ambiental (ECA)</h3>
        <p>Los Estándares de Calidad Ambiental (ECA) fueron establecidos desde nnnn por el Ministerio del Ambiente (MINAM) con la finalidad de garantizar la conservación de la calidad ambiental mediante el uso de instrumentos de gestión ambiental sofisticados y de evaluación detallada. Estos se evalúan debido en los diferentes sucesos que se vienen presentando en el Distrito de...</p>
        <div className='flex justify-between my-4'>
          <InputCP label="Buscar:" placeholder="EB001" id="eb" />
          <div className='flex' style={{ width: "430px" }}>
          </div>
        </div>
        <div className='flex justify-between my-4'>
          
          <TableCP titulos={titulosTabla} datos={datosJson} showAction={false}/>
            <div className='flex' style={{ width: "230px" }}>
          </div>
          <TableCP titulos={fabricasTabla} datos={datosFabricas} showAction={false}/>

        </div>
        
      </div>
    </div>
  )
}

export default InformECA