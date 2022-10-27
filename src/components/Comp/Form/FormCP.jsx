import React from 'react'
import ButtonPS from '../ButtonPS'
import InputCP from '../InputCP'

const FormCP = ({ visible, funcion }) => {
    let opacidad = "invisible"    
    if (visible) {
        opacidad = "visible"
        
    }
    return (
        <div className={'absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black bg-opacity-40 ' + opacidad} >
            <form className='form p-4 bg-white rounded-lg'>
                <div>AGREGAR</div>
                <InputCP label="Id: " placeholder={"EB001"} id={"id"} />
                <InputCP label="Descripción: " placeholder={"Fábrica de plasticos"} id={"descripcion"} />
                <InputCP label="Ubicación:" placeholder={"Av. Daniel Turín"} id={"ubicacion"} />
                <InputCP label="Modelo:" placeholder={"MB4757"} id={"modelo"} />
                <InputCP label="Nº Nodos" placeholder={"11"} id={"nodos"} />
                <InputCP label="Ip:" placeholder={"192.168.172.1"} id={"ip"} />
                <InputCP label="Mascara:" placeholder={"255.255.0.0"} id={"mascara"} />
                <div className='flex justify-between' >
                    <div className="flex-1"><ButtonPS estilo="primario" texto="Agregar" espacio="mr-6" /></div>
                    <div className='flex-1'><ButtonPS estilo="secundario" texto="Cancelar" funcion={funcion} /></div>
                </div>
            </form>
        </div>
    )
}

export default FormCP