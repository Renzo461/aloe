import React from 'react'

const TextAreaCP = ({label,placeholder,id,className,rows}) => {
  return (
    <div className={`flex items-center ${className}`}>
        <label htmlFor={id} className="flex-1">{label}</label>
        <textarea rows={rows} id={id} name={id} placeholder={placeholder} className='border rounded-lg ml-4 p-1 flex-1'>
        </textarea>
    </div>
  )
}

export default TextAreaCP