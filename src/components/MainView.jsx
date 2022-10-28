import React from 'react'
import HeaderNavBar from './Aside/HeaderNavBar'
import FormCP from './Comp/Form/FormCP'
import RegistroIncidente from './Incidentes/RegistroIncidente'

const MainView = ({nombre}) => {
  return (
    <div className='flex-1'>
      <HeaderNavBar nombre={nombre}/>
      <RegistroIncidente/>      
    </div>
  )
}

export default MainView