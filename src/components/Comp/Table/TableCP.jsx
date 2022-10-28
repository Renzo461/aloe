import TableHeadCP from './TableHeadCP'
import TableRowCP from './TableRowCP'

const TableCP = ({ titulos, datos, showAction = true }) => {    
    //CONSTRUYENDO FILAS DE LA TABLA        
    const filaTabla = datos.map(
        (e) => {            
            const d = (Object.values(e))            
            return <TableRowCP key={d} datos={d} showAction={showAction} />
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