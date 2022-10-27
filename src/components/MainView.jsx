import React from 'react'
import RegistroIncidente from './Incidentes/RegistroIncidente'
import HeaderNavBar from './Aside/HeaderNavBar'
import FormCP from './Comp/Form/FormCP'

const MainView = ({nombre}) => {
  return (
    <div className='flex-1'>
      <HeaderNavBar nombre={nombre}/>
      <RegistroIncidente/>      
    </div>
  )
}

export default MainView