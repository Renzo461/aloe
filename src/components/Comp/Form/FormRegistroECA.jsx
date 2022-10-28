import React, { useState } from 'react'
import ButtonPS from '../ButtonPS'
import InputCP from '../InputCP'
import TextAreaCP from '../TextAreaCP'
import PopupCP from '../Popups/PopupCP'
import { BsCheckCircle } from 'react-icons/bs'

const FormRegistroECA = () => {
    const [opacidad, setopacidad] = useState(false)

    const verAgregar = () =>{
        setopacidad(!opacidad)
        console.log(opacidad)
    }
    return (
        <>
            <form className='form px-4' style={{ width: "80%" }}>
                <InputCP label="ID ECA: " placeholder={"ECA-001"} id={"id"} className={"pb-5"}/>
                <InputCP label="Código según normativa: " placeholder={"Nº 003-2017-MINAM"} id={"codigo"} className={"pb-5"}/>
                <InputCP label="Tipo:" placeholder={"Aire"} id={"tipo"} className={"pb-5"}/>
                <InputCP label="Descripción:" placeholder={"Dióxido de nitrógeno"} id={"descripcion"} className={"pb-5"}/>
                <TextAreaCP label="Información" placeholder={"Aprueban Estándares de Calidad Ambiental (ECA) para Aire y establecen Disposiciones Complementarias"} id={"informacion"} className={"pb-5"} rows={7}/>
                <div className='flex justify-between' >
                    <div className="flex-1"><ButtonPS estilo="primario" texto="Registrar" espacio="mr-6"funcion={() => { 
                            verAgregar();
                        }} /></div>
                    <div className='flex-1'><ButtonPS estilo="secundario" texto="Cancelar" /></div>
                </div>
            </form>

            <PopupCP visible={opacidad} funcion={verAgregar} title={"Registro de ECA"} description={"Se ha registrado correctamente"} buttonText={"Aceptar"} icon={<BsCheckCircle />} />
        </>

    )
}

export default FormRegistroECA