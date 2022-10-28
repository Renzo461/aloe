import React from 'react'
import ButtonPS from '../ButtonPS'

const PopupCP = ({ visible, funcion, title, description, buttonText, icon }) => {
    let opacidad = "invisible"    
    if (visible) {
        opacidad = "visible"
        
    }
    return (
        <div className={'absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black bg-opacity-40 ' + opacidad} >
            <div className='p-4 bg-white rounded-lg form'>
                {/* <h3 className='text-center bold txCrema'>{title}</h3> */}
                <div className='flex justify-center items-center mt-2 text-4xl txCrema'>{icon}</div>
                <p className='mt-3 mb-5 text-center'>{description}</p>
                <div className='flex justify-between' >
                    <div className='flex-1'><ButtonPS estilo="secundario" texto={buttonText} funcion={funcion} /></div>
                </div>
            </div>
        </div>
    )
}

export default PopupCP