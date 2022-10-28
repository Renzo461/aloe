import React, { useState } from 'react'

const InputCP = ({ label, placeholder, id, className, onKeyUp }) => {
  let [inputValue, setInputValue] = useState("")
  return (
    <div className={`flex items-center ${className}`}>
      <label htmlFor={id} className="flex-1">{label}</label>
      <input type="text" id={id} name={id} placeholder={placeholder} onKeyUp={()=>onKeyUp(inputValue)} onChange={(event) => setInputValue(event.target.value)} className='border rounded-lg ml-4 p-1 flex-1' />
    </div>
  )
}

export default InputCP