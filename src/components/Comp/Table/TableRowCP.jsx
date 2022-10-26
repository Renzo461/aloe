import React from 'react'
import ActionCP from '../ActionCP'
const TableRowCP = ({ datos }) => {
    const dat = datos.map(
        (e) => <td key={e}>{e}</td>
    )

    return (
        <tr>
            {dat}
            <td>
                <div className='flex justify-center items-center'>
                    <ActionCP icono="ver" />
                    <ActionCP icono="editar" espaciado="mx-2" />
                    <ActionCP icono="eliminar" />
                </div>
            </td>
        </tr>
    )
}

export default TableRowCP