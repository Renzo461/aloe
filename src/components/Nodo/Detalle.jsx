import React from 'react'
import ButtonPS from '../Comp/ButtonPS'


const VisualizarNodo = ({ visible, detalle }) => {
     let opacidad = "invisible"    
     if (visible) {
        opacidad = "visible"
        
     }
    return (
        <div className={'absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black bg-opacity-40 ' + opacidad } >
            <form className='form p-4 bg-white rounded-lg'>
                <div>DETALLE</div>
                <div className='flex justify-between'> 
                    <p className='bold uppercase'>id </p>
                    <p className='normal capitalize'>EB001</p> 
                </div>
                <div  className='flex justify-between'> 
                    <p className='bold uppercase'>Descripción </p>
                    <p className='normal capitalize'>Fabrica de plasticos</p>
                </div>
                <div  className='flex justify-between'> 
                    <p className='bold uppercase'>Ubicación</p>
                    <p className='normal capitalize'>Av. Daniel Turin</p>
                </div>
                <div  className='flex justify-between'> 
                    <p className='bold uppercase'>Modelo </p>
                    <p className='normal capitalize'>MB4757</p>
                </div>
                <div className='flex justify-between'> 
                    <p className='bold uppercase'>Ip Red</p>
                    <p className='normal capitalize'>192.168.172.1</p>
                </div>
                <div className='flex justify-between'> 
                    <p className='bold uppercase'>N.Bateria</p>
                    <p className='normal capitalize'>70%</p>
                </div>
                <div className='flex justify-between'> 
                    <p className='bold uppercase'>Modo:</p>
                    <p className='normal capitalize'>Sleep</p>
                </div>
                <div className='flex justify-between'> 
                    <p className='bold uppercase'>Est.Base </p>
                    <p className='normal capitalize'>EB001</p>
                </div>
                
                <div className='flex justify-between' >
                    <div className="flex-1"><ButtonPS estilo="primario" texto="Cerrar" funcion={detalle}/></div>
                </div>
            </form>
        </div>
    )
}
export default VisualizarNodo
