import React from 'react'
import ButtonPS from '../Comp/ButtonPS'


const Eliminar = ({ visible, funcion }) => {
    let opacidad = "invisible"    
    if (visible) {
        opacidad = "visible"
        
    }
    return (
        <div className={'absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black bg-opacity-40 ' + opacidad} >
            <form className='form p-4 bg-white rounded-lg'>
            <div  className='text-center my-2'>ELIMINAR</div>
            <h1 className='text-center mb-4'>¿Desea eliminar el Nodo?</h1>

            <div className='flex justify-between' >
                    <div className="flex-1"><ButtonPS estilo="primario" texto="NO" espacio="mr-6" /></div>
                    <div className='flex-1'><ButtonPS estilo="secundario" texto="SI" funcion={funcion} /></div>
                </div>
            </form>
        </div>
    )
}
export default Eliminar
