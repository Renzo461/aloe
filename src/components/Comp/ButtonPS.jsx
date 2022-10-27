import React from 'react'

const ButtonPS = ({ estilo, texto, espacio, className }) => {
    let style = "cursor-pointer rounded-lg flex items-center justify-center h-12 uppercase bold"
    if (estilo === "primario") {
        style += " bgCrema text-white "
    }
    else if (estilo === "secundario") {
        style += " borCrema txCrema "
    }
    if (espacio) {
        style += espacio
    }
    return (
        <>
            <div className={style}>
                <p>{texto}</p>
            </div>
        </>
    )
}

export default ButtonPS