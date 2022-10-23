import React from 'react'
import noti from '../images/notificación.svg'
import salir from '../images/salir.svg'

const HeaderNavBar = () => {
  return (
    <div className='flex justify-between bg-white drop-shadow-md items-center h-14 px-7'>
        <div>
            <p className='txVerde'>Bienvenido Alumno</p>
        </div>
        <div className='flex items-center'>
            <div className='mr-5 cursor-pointer'>
                <img src={noti} alt="notificaciones" />
            </div>
            <div className='flex items-center cursor-pointer'>
                <img src={salir} alt="salie" />
                <p className='txVerde'>Cerrar Sesión</p>
            </div>
        </div>
    </div>
  )
}

export default HeaderNavBar