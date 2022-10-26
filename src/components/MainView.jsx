import React from 'react'
import EBMain from './Estaciones Base/EBMain'
import HeaderNavBar from './Aside/HeaderNavBar'
import FormCP from './Comp/Form/FormCP'

const MainView = ({nombre}) => {
  return (
    <div className='flex-1'>
      <HeaderNavBar nombre={nombre}/>
      <EBMain/>      
    </div>
  )
}

export default MainView