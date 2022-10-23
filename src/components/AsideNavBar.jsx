import React from 'react'
import menu from "../menu.svg"
import user from "../user.png"

const AsideNavBar = () => {
  return (
    <div className='w-96 bgVerde min-h-screen'>
      <div className='flex justify-end p-2'>
        <img src={menu} alt="menuIcon" className='cursor-pointer'/>
      </div>
      <div className='flex flex-col py-9'>
        <div className='m-auto'>
          <img src={user} alt="Usuario" />
        </div>
        <div><h5 className='bold text-white text-center'>Alumno 1</h5></div>
      </div>
      <div className='py-7 flex justify-center bg-white cursor-pointer'><h5 className='bold txVerde'>Sensores Ambientales</h5></div>
      <div className='py-7 flex justify-center cursor-pointer'><h5 className='bold text-white'>Transporte</h5></div>
      <div className='py-7 flex justify-center cursor-pointer'><h5 className='bold text-white'>Usuarios</h5></div>
      <div className='py-7 flex justify-center cursor-pointer'><h5 className='bold text-white'>Municipalidad</h5></div>
      <div className='py-7 flex justify-center cursor-pointer'><h5 className='bold text-white'>Configuración</h5></div>      
    </div>
  )
}

export default AsideNavBar