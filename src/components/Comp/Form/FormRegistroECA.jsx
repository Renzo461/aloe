import React, { useState, useEffect  } from 'react'
import ButtonPS from '../ButtonPS'
import InputCP from '../InputCP'
import TextAreaCP from '../TextAreaCP'
import PopupCP from '../Popups/PopupCP'
import { BsCheckCircle } from 'react-icons/bs'
import SelectCP from '../SelectCP'

const FormRegistroECA = () => {
    const [opacidad, setopacidad] = useState(false)
    const [executeEffect, setExecuteEffect] = useState(true)

    const verAgregar = () =>{
        setopacidad(!opacidad)
        //console.log(opacidad)
    }

    useEffect(() => {
        // Actualiza el título del documento usando la API del navegador
        if (executeEffect) {
            //console.log("Beachan was here!!!");
            getTipoEca();
            setExecuteEffect(false);
        }
    });

    const [codNormativo, setcodNormativo] = useState("")
    const [tipoEcaId, settipoEcaId] = useState("")
    const [descripcion, setdescripcion] = useState("")
    const [informacion, setinformacion] = useState("")

    const [datosJson, setdatosJson] = useState([])

    const clearForm = () => {
        setcodNormativo('');
        settipoEcaId(1);
        setdescripcion('');
        setinformacion('');
    };

    const getTipoEca = () => {

        const URL = "http://localhost:4040/tipoeca/"

        fetch(URL)
        .then(res => res.json())
        .then(dat => {
            let options = [];
            for(let v of dat) {
                options.push({ "value": v.id, "text": v.tipo });
            }
            setdatosJson(options); 
            //console.log(options);
        })
    };

    const agregarEca = () => {
        const body = {
            method: 'POST',
            body: JSON.stringify({
                "cod_normativo": codNormativo,
                "tipo_eca_id": tipoEcaId,
                "descripcion": descripcion,
                "informacion": informacion,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const URL = "http://localhost:4040/eca/"
        fetch(URL, body)
        .then(res => {
            res.json();
            verAgregar();
            clearForm();
        })
    }

    return (
        <>
            <form className='form px-4' style={{ width: "80%" }}>
                {/* <InputCP label="ID ECA: " placeholder={"ECA-001"} id={"id"} className={"pb-5"}/> */}
                <InputCP value={codNormativo} label="Código según normativa: " placeholder={"Nº 003-2017-MINAM"} id={"codigo"} className={"pb-5"} onChange={(e) => setcodNormativo(e.target.value)}/>
                {/* <InputCP value={tipoEcaId} label="Tipo:" placeholder={"Aire"} id={"tipo"} className={"pb-5"} onChange={(e) => settipoEcaId(e.target.value)}/> */}
                <SelectCP value={tipoEcaId} label="Tipo:" placeholder={"Aire"} id={"tipo"} className={"pb-5"} onChange={(e) => settipoEcaId(e.target.value)} options={datosJson} />
                <InputCP value={descripcion} label="Descripción:" placeholder={"Dióxido de nitrógeno"} id={"descripcion"} className={"pb-5"} onChange={(e) => setdescripcion(e.target.value)}/>
                <TextAreaCP value={informacion} label="Información" placeholder={"Aprueban Estándares de Calidad Ambiental (ECA) para Aire y establecen Disposiciones Complementarias"} id={"informacion"} className={"pb-5"} rows={7} onChange={(e) => setinformacion(e.target.value)}/>
                <div className='flex justify-between' >
                    <div className="flex-1">
                        <ButtonPS estilo="primario" texto="Registrar" espacio="mr-6"funcion={() => { 
                            agregarEca();
                        }} /></div>
                </div>
            </form>

            <PopupCP visible={opacidad} funcion={verAgregar} title={"Registro de ECA"} description={"Se ha registrado correctamente"} buttonText={"Aceptar"} icon={<BsCheckCircle />} />
        </>

    )
}

export default FormRegistroECA