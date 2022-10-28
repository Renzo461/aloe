import React, { useState } from 'react'
import ButtonPS from '../ButtonPS'
import InputCP from '../InputCP'
import InputFile from '../InputFile'
import PopupCP from '../Popups/PopupCP'
import { BsCheckCircle } from 'react-icons/bs'
import SelectCP from '../SelectCP'

const FormIncidente = () => {
    const [opacidad, setopacidad] = useState(false)

    const verAgregar = () =>{
        setopacidad(!opacidad)
        console.log(opacidad)
    }

    return (
        <>
            <form className='px-4 form' style={{width: "80%" }}>
                <InputCP label="Descripción: " placeholder={"No me permite seleccionar ECA"} id={"descripcion"} className={"pb-5"}/>
                <SelectCP label="Prioridad:" options={[{text: "Baja", value: 1},{text: "Media", value: 2}, {text: "Alta", value: 3}]} id={"prioridad"} className={"pb-5"}/>
                <InputFile label="Adjuntar problema:" id={"documento"} className={"pb-5"}/>
                <div className='flex justify-center' >
                    <div><ButtonPS estilo="primario" texto="Enviar" espacio="px-20" funcion={verAgregar} /></div>
                </div>
            </form>
            <PopupCP visible={opacidad} funcion={verAgregar} title={"Resgistro de Incidentes"} description={"Se ha registrado correctamente"} buttonText={"Aceptar"} icon={<BsCheckCircle />} />
        </>
        
    )
}

export default FormIncidente