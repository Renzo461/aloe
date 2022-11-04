import React, { useState } from 'react'
import ButtonPS from '../ButtonPS'
import InputCP from '../InputCP'
import InputFile from '../InputFile'
import PopupCP from '../Popups/PopupCP'
import { BsCheckCircle } from 'react-icons/bs'
import SelectCP from '../SelectCP'

const FormIncidente = (props) => {
    const [opacidad, setopacidad] = useState(false)
    const [description, setDescription] = useState("")
    const [prioridad, setPrioridad] = useState("Media")

    const verAgregar = () =>{
        setopacidad(!opacidad)
        //console.log(opacidad)
    }

    const clearForm = () => {
        setDescription('');
        setPrioridad("Media");
    };

    return (
        <>
            <form className='px-4 form' style={{ width: "80%" }} onSubmit={(e) => { 
                e.preventDefault();
                props.addIncidente(description);
            }}>
                <InputCP label="Descripción: " placeholder={"No me permite seleccionar ECA"} id={"descripcion"} className={"pb-5"} required={true} value={description} onChange={()=> setDescription(document.getElementById('descripcion').value)} />
                <SelectCP label="Prioridad:" options={[{text: "Baja", value: "Baja"},{text: "Media", value: "Media"}, {text: "Alta", value: "Alta"}]} id={"prioridad"} className={"pb-5"} onChange={(e) => setPrioridad(e.target.value)} value={prioridad}/>
                <InputFile label="Adjuntar problema:" id={"documento"} className={"pb-5"}/>
                <div className='flex justify-center' >
                    <div><ButtonPS estilo="primario" texto="Enviar" espacio="px-20" funcion={() => { 
                        
                        props.addIncidente(description, prioridad, () => {
                            verAgregar();
                            clearForm();
                        });
                    }} /></div>
                </div>
            </form>
            <PopupCP visible={opacidad} funcion={verAgregar} title={"Registro de Incidentes"} description={"Se ha registrado correctamente"} buttonText={"Aceptar"} icon={<BsCheckCircle />} />
        </>
        
    )
}

export default FormIncidente