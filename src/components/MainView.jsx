import React from 'react'
import HeaderNavBar from './Aside/HeaderNavBar'
import FormCP from './Comp/Form/FormCP'
import InformECA from './SensoresAmbientales/InformECA'

const MainView = ({nombre}) => {
  return (
    <div className='flex-1'>
      <HeaderNavBar nombre={nombre}/>
      <InformECA/>      
    </div>
  )
}

export default MainView