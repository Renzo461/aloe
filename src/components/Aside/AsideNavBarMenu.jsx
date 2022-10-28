import React from 'react'
import { NavLink } from 'react-router-dom'

const AsideNavBarMenu = ({ icon, titulo, nav }) => {
  return (
    <NavLink to={nav} className='menu cursor-pointer hover:bg-gray-100 hover-txVerde py-5 pl-4 flex items-center flex-nowrap w-96'>
      {icon}
      <h5 className='pl-4 bold text-center text-white uppercase'>{titulo}</h5>
    </NavLink>
  )
}

export default AsideNavBarMenu