import React, { useState, useEffect } from 'react'
import ButtonPS from '../Comp/ButtonPS'
import FormInformECA from '../Comp/Form/FormInformECA'
import InputCP from '../Comp/InputCP'
import TableCP from '../Comp/Table/TableCP'


const InformECA = () => {

  const [executeEffect, setExecuteEffect] = useState(true)
  const [datosJson, setDatosJson] = useState([])
  const [datosFabricas, serDatosFabricas] = useState([])

  useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        if (executeEffect) {
            //console.log("Beachan was here!!!");
            getEcas();
            getFabricas();
            setExecuteEffect(false);
        }
  });
  
  const getEcas = () => {

        const URL = "http://localhost:4040/eca/"

        fetch(URL)
        .then(res => res.json())
        .then(dat => {
            let items = [];
            for(let v of dat) {
                items.push({ "descripcion": v.descripcion });
            }
            setDatosJson(items); 
            //console.log(options);
        })
  };

  const getFabricas = () => {

        const URL = "http://localhost:4040/fabrica/"

        fetch(URL)
        .then(res => res.json())
        .then(dat => {
            let items = [];
            for(let v of dat) {
                items.push({ "nombre": v.nombre });
            }
            serDatosFabricas(items); 
            //console.log(options);
        })
  };
  
  // const datosJson = 
  //   [
  //     { "id": "", "descripcion": "Valor anual de concentración de plomo", "fecha y hora": "", "estado": ""},
  //     { "id": "", "descripcion": "Material particulado con diámetro menor a 2,5 micras", "fecha y hora": "", "estado": ""},
  //     { "id": "", "descripcion": "Material particulado con diámetro menor a 10 micras", "fecha y hora": "", "estado": ""},
  //     { "id": "", "descripcion": "Dióxido de Azufre", "fecha y hora": "", "estado": ""},
  //     { "id": "", "descripcion": "Dióxido de Nitrógeno", "fecha y hora": "", "estado": ""},
  //     { "id": "", "descripcion": "Mercurio Gaseoso Total", "fecha y hora": "", "estado": ""}
  //   ]
  
  // const datosFabricas = 
  //   [
  //     { "id": "", "descripcion": "Ingenieros S.A ", "fecha y hora": "", "estado": ""},
  //     { "id": "", "descripcion": "Metales S.A.C", "fecha y hora": "", "estado": ""},
  //     { "id": "", "descripcion": "Fábrica de soldadura EMSE S.A", "fecha y hora": "", "estado": ""}
  //   ]
  
  const titulosTabla = ["Estándares de calidad ambiental"]
  const fabricasTabla = ["Fábricas que cuentan con ECAs"]
  
  return (
    <div className='px-5 mt-5'>
      <div>
        <h3 className='bold uppercase text-center'>Información de Estándares de Calidad Ambiental (ECA)</h3>
        <p className='mt-4'>Los Estándares de Calidad Ambiental (ECA) fueron establecidos desde nnnn por el Ministerio del Ambiente (MINAM) con la finalidad de garantizar la conservación de la calidad ambiental mediante el uso de instrumentos de gestión ambiental sofisticados y de evaluación detallada. Estos se evalúan debido en los diferentes sucesos que se vienen presentando en el Distrito de...</p>
        <div className='flex justify-between my-4 mx-20'>
          <InputCP label="Buscar:" placeholder="Plomo" id="searchEnvironment" />
          <div className='flex' style={{ width: "430px" }}>
          </div>
        </div>
        <div className='flex justify-between my-4'>
          
          <TableCP titulos={titulosTabla} datos={datosJson} showActions={false}/>
            <div className='flex' style={{ width: "230px" }}>
          </div>
          <TableCP titulos={fabricasTabla} datos={datosFabricas} showActions={false}/>

        </div>
        
      </div>
    </div>
  )
}

export default InformECA