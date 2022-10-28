import React from 'react'

const SelectCP = (label, options, id, className) => {
    const ops = []

    options.forEach((data) => {
        ops.push(<option value={data.value}>{data.text}</option>)
    })
    return (
        <div className={`flex items-center ${className}`}>
            <label for={id} className='flex-1'> {label} </label>
            <select id={id} className='flex-1'>
                {ops}
            </select>
        </div>
    )
}

export default SelectCP