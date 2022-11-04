import React from 'react'
import TableHeadCP from './TableHeadCP'
import TableRowCP from './TableRowCP'

const TableCP = ({ titulos, datos, eliminar, detalle, actualizar, showActions = true}) => {
    //CONSTRUYENDO FILAS DE LA TABLA
    const filaTabla = datos.map(
        (e) => {
            const d = (Object.values(e))
            return <TableRowCP id={e.id} key={d[0]} datos={d} eliminar={eliminar} detalle={detalle} actualizar={actualizar} showActions={showActions} />
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