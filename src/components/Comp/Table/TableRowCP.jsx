import React from 'react'
import ActionCP from '../ActionCP'
const TableRowCP = ({ datos, showAction = true }) => {
    const dat = datos.map(
        (e) => {
            return <td key={e} className="text-center">{e}</td>
        }
    )

    if (showAction) {
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