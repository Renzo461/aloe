import React from 'react'
import ActionCP from '../ActionCP'
const TableRowCP = ({ datos, showAction = true, eliminar, detalle, actualizar }) => {
    let c = 0
    const dat = datos.map(        
        (e) => {            
            c++
            return <td key={e+""+c} className="text-center">{e}</td>
        }

    )

    if (showAction) {
        return (
            <tr>
                {dat}
                <td>
                    <div className='flex justify-center items-center'>
                        <ActionCP icono="ver" detalle={detalle} />
                        <ActionCP icono="editar" actualizar={actualizar} espaciado="mx-2" />
                        <ActionCP icono="eliminar" eliminar={eliminar} />
                    </div>
                </td>
            </tr>
        )
    }
    else {
        return (
            <tr>
                {dat}
                <td>

                </td>
            </tr>
        )
    }

}

export default TableRowCP