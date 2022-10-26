import React from 'react'

const AsideNavBarMenu = ({ icon, titulo, active }) => {
  return (
    <div className={'menu cursor-pointer hover:bg-gray-100 hover-txVerde py-5 pl-4 flex items-center flex-nowrap w-96'
      + (active
        ? ' active'
        : '')}>
      {icon}  
      <h5 className='pl-4 bold text-center text-white uppercase'>{titulo}</h5>
    </div>
  )
}

export default AsideNavBarMenu