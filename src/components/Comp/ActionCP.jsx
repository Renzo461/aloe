import React from 'react'
import { GoEye } from 'react-icons/go'
import { AiTwotoneEdit } from 'react-icons/ai'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useAppContext } from '../Context/AppContext'


const ActionCP = ({ icono, espaciado, eliminar, detalle, actualizar, id }) => {
    const { setidCtx } = useAppContext()
    const e = () => {
        eliminar()
        setidCtx(id)
    }
    if (icono === "ver") {
        return (
            <div className={'h-7 w-7 actionVerde flex justify-center items-center cursor-pointer ' + espaciado} onClick={detalle}>
                <GoEye color='white' />
            </div>
        )
    }
    else if (icono === "editar") {
        return (
            <div className={'h-7 w-7 actionAzul flex justify-center items-center cursor-pointer ' + espaciado} onClick={actualizar}>
                <AiTwotoneEdit color='white' />
            </div>
        )
    }
    else if (icono === "eliminar") {
        return (
            <div className={'h-7 w-7 actionRojo flex justify-center items-center cursor-pointer ' + espaciado} onClick={e}>
                <FaRegTrashAlt color='white' />
            </div>
        )
    }
    else {
        return (<></>)
    }
}

export default ActionCP