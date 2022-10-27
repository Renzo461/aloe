import React from 'react'

const InputCP = ({label,placeholder,id,className}) => {
  return (
    <div className={`flex items-center ${className}`}>
        <label htmlFor={id} className="flex-1">{label}</label>
        <input type="file" id={id} name={id} placeholder={placeholder} className='border rounded-lg ml-4 p-1 flex-1'/>
    </div>
  )
}

export default InputCP