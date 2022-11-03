import React from 'react'

const TextAreaCP = ({label,placeholder,id,className,rows, onChange, value}) => {
  return (
    <div className={`flex items-center ${className}`}>
        <label htmlFor={id} className="flex-1">{label}</label>
        <textarea value={value} rows={rows} id={id} name={id} placeholder={placeholder} className='border rounded-lg ml-4 p-1 flex-1' onChange={onChange}>
        </textarea>
    </div>
  )
}

export default TextAreaCP