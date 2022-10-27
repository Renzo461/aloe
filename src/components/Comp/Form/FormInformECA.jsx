import React from 'react'
import ButtonPS from '../ButtonPS'
import InputCP from '../InputCP'
import InputFile from '../InputFile'

const FormIncidente = () => {
    return (
        <form className='form px-4' style={{width: "80%" }}>
            <InputCP label="Descripción: " placeholder={"No me permite seleccionar ECA"} id={"descripcion"} className={"pb-5"}/>
            <InputCP label="Prioridad:" placeholder={"Alta"} id={"prioridad"} className={"pb-5"}/>
            <InputFile label="Adjuntar problema:" id={"documento"} className={"pb-5"}/>
            <div className='flex justify-center' >
                <div><ButtonPS estilo="primario" texto="Enviar" espacio="px-20"/></div>
            </div>
        </form>
    )
}

export default FormIncidente