import React from 'react'
import ButtonPS from '../Comp/ButtonPS'
import { useAppContext } from '../Context/AppContext'


const Eliminar = ({ visible, funcion }) => {
    const { idCtx } = useAppContext()

    let opacidad = "invisible"
    if (visible) {
        opacidad = "visible"
    }

    const eliminar = () => {
        const body = {
            method: 'DELETE',            
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(idCtx)
        const URL = "http://192.168.1.40:4040/nodo/" + idCtx
        fetch(URL,body)
          .then(res => res.json())
    }
    return (
        <div className={'absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black bg-opacity-40 ' + opacidad} >
            <form className='form p-4 bg-white rounded-lg'>
                <div className='text-center my-2'>ELIMINAR</div>
                <h1 className='text-center mb-4'>¿Desea eliminar el Nodo?</h1>

                <div className='flex justify-between' >
                    <div className="flex-1"><ButtonPS estilo="primario" texto="NO" espacio="mr-6" funcion={funcion} /></div>
                    <div className='flex-1' onClick={eliminar}><ButtonPS estilo="secundario" texto="SI" funcion={funcion} /></div>
                </div>
            </form>
        </div>
    )
}
export default Eliminar
