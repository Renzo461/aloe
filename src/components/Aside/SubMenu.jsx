import React from 'react'
import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

const SubMenu = (props) => {

    const [abierto, setabierto] = useState(false)    
    const abrir = () => {        
        if(props.colapse===true){
            setabierto(false)            
        }
        else{
            setabierto(!abierto)            
        }        
    }    

    return (
        <div >
            <div onClick={abrir} className="menu cursor-pointer hover:bg-gray-100 hover-txVerde py-2 pl-4 flex items-center flex-nowrap w-96">
                {props.icon}
                <h5 className='pl-4 bold text-white uppercase w-72'>{props.titulo}</h5>
                <IoMdArrowDropdown className='rotate' />
            </div>
            <div className={"submenu " + (abierto ? "" : "hidden")}>
                {
                    props.children
                }
            </div>
        </div>
    )
}

export default SubMenu