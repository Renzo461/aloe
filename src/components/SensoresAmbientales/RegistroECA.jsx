import React from 'react'
import ButtonPS from '../Comp/ButtonPS'
import FormRegistroECA from '../Comp/Form/FormRegistroECA'
import InputCP from '../Comp/InputCP'
import TableCP from '../Comp/Table/TableCP'


const RegistroECA = () => {
  
  return (
    <div className='px-5 mt-5'>
      <div>
        <h1 className='bold uppercase'>Registro ECA</h1>
        <div className='flex justify-between my-4'>
          <div className='flex' style={{ width: "430px" }}>
          </div>
        </div>
      </div>
      <FormRegistroECA/>
    </div>
  )
}

export default RegistroECA