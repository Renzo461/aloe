import React from 'react'
import TableHeadCP from './TableHeadCP'
import TableRowCP from './TableRowCP'

const TableCP = ({ titulos, datos, showAction = true, funcion, detalle, actualizar}) => {
console.log(funcion)
    //CONSTRUYENDO FILAS DE LA TABLA
    const filaTabla = datos.map(
        (e) => {
            const d = (Object.values(e))
            return <TableRowCP key={d[0]} datos={d} showAction={showAction} funcion={funcion} detalle={detalle} actualizar={actualizar}/>
        }
    )

    return (
        <table className="table-auto w-full">
            <thead>
                <TableHeadCP titulos={titulos} />
            </thead>
            <tbody>
                {filaTabla}
            </tbody>
        </table>
    )
}

export default TableCP