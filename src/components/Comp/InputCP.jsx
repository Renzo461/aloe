import React, { useState } from 'react'

const InputCP = ({ value, label, placeholder, id, className, onChange }) => {    
  return (    
    // <div className={`flex items-center ${className}`}>
    //   <label htmlFor={id} className="flex-1">{label}</label>
    //   <input type="text" id={id} name={id} placeholder={placeholder} onKeyUp={() => { if (onKeyUp) onKeyUp(inputValue) }} onChange={(event) => { setInputValue(event.target.value); if (onChange) onChange(); }} className='border rounded-lg ml-4 p-1 flex-1' />
    // </div>
    <div className={`flex items-center ${className}`}>
      <label htmlFor={id} className="flex-1">{label}</label>
      <input value={value} type="text" id={id} name={id} placeholder={placeholder} onChange={onChange} className='border rounded-lg ml-4 p-1 flex-1' />
    </div>
  )
}

export default InputCP