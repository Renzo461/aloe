import React from 'react'

const SelectCP = () => {
    return (
        <div className='flex items-center'>
            <label for="id_select" className='flex-1'> Options </label>
            <select id="id_select" className='flex-1'>
                <option value="1"> Option1 </option>
                <option value="2"> Option2 </option>
            </select>
        </div>
    )
}

export default SelectCP