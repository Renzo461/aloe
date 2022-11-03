import React from 'react'
import { NavLink } from 'react-router-dom'

const AsideNavBarMenu = ({ titulo, to}) => {
  return (
    <NavLink to={to} className='menu cursor-pointer hover:bg-gray-100 hover-txVerde py-2 pl-4 flex items-center flex-nowrap w-96 '>
      <h6 className='pl-4 bold text-white uppercase w-72'>{titulo}</h6>
    </NavLink>
  )
}

export default AsideNavBarMenu