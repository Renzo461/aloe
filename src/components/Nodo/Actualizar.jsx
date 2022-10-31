import React from 'react'
import ButtonPS from '../Comp/ButtonPS'
import InputCP from '../Comp/InputCP'


const Actualizar = ({ visible, actualizar }) => {
    let opacidad = "invisible"    
    if (visible) {
        opacidad = "visible"
        
    }
    return (
        <div className={'absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black bg-opacity-40 ' + opacidad} >
            <form className='form p-4 bg-white rounded-lg'>
                <div>ACTUALIZAR</div>
                <InputCP label="Id: " placeholder={"EB001"} id={"idNo"} />
                <InputCP label="Descripción: " placeholder={"Fábrica de plasticos"} id={"descripcionNo"} />
                <InputCP label="Ubicación:" placeholder={"Av. Daniel Turín"} id={"ubicacionNo"} />
                <InputCP label="Modelo:" placeholder={"MB4757"} id={"modeloNo"} />
                <InputCP label="Ip Red:" placeholder={"192.168.172.1"} id={"ipNo"} />
                <InputCP label="N.Bateria" placeholder={"70%"} id={"nivelNo"} />
                <InputCP label="Modo:" placeholder={"Sleep"} id={"modoNo"} />
                <InputCP label="Est. Base" placeholder={"EB001"} id={"EstNo"} />
                <div className='flex justify-between' >
                    <div className="flex-1"><ButtonPS estilo="primario" texto="Actualizar" espacio="mr-6" /></div>
                    <div className='flex-1'><ButtonPS estilo="secundario" texto="Cancelar" funcion={actualizar} /></div>
                </div>
            </form>
        </div>
    )
}
export default Actualizar
