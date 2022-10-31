import React from 'react'
import ActionCP from '../ActionCP'
const TableRowCP = ({ datos, showAction = true, funcion , detalle, actualizar}) => {
    console.log(funcion)
    const dat = datos.map(
        (e) => {
            return <td key={e} className="text-center">{e}</td>
        }
        
    )
 
    if (showAction){
        return (
            <tr>
                {dat}
                <td>
                    <div className='flex justify-center items-center'>
                        <ActionCP icono="ver" detalle={detalle}/>
                        <ActionCP icono="editar" actualizar={actualizar} espaciado="mx-2" />
                        <ActionCP icono="eliminar" verEliminar={funcion} />
                    </div>
                </td>
            </tr>
        )
    }
    else{
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