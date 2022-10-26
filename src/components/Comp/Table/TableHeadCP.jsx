import React from 'react'

const TableHeadCP = ({ titulos }) => {
    const head = titulos.map(
        (e) => {
            return <th key={e}>{e}</th>
        }
    )
    return (
        <tr>
            {head}
        </tr>
    )
}

export default TableHeadCP