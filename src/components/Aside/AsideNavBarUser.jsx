import user from "../../images/user.png"
import React from 'react'

const AsideNavBarUser = ({nombre}) => {
    return (
        <div className='flex items-center py-9 w-96'>
            <div className='pl-2'>
                <img src={user} alt="Usuario" className="h-10 w-10 "/>
            </div>
            <div><h5 className='pl-2 bold text-white text-center capitalize'>{nombre}</h5></div>
        </div>
    )
}

export default AsideNavBarUser