import React from 'react'
import { useState } from 'react'
import ButtonPS from '../Comp/ButtonPS'

import InputCP from '../Comp/InputCP'

const FormNodo = ({ visible, funcion }) => {
    let opacidad = "invisible"    
    if (visible) {
        opacidad = "visible"
        
    }

    const [ubicacion_id, setubicacion_id] = useState(0)
    const [placa_id, setplaca_id] = useState("")
    const [ip, setip] = useState("")
    const [mascara, setmascara] = useState("")
    const [gateway, setgateway] = useState(0)
    const [bateria_nivel_id, setbateria_nivel_id] = useState(0)
    const [modo_id, setmodo_id] = useState(0)
    const [distancia, setdistancia] = useState(0)
    const [estacion_base_id, setestacion_base_id] = useState(0)

    const agregarNodo = () => {
        const body = {
            method: 'POST',
            body: JSON.stringify({
                "ubicacion_id": ubicacion_id,
                "placa_id": placa_id,
                "ip": ip,
                "mascara":mascara,
                "gateway": gateway,
                "bateria_nivel_id": bateria_nivel_id ,
                "modo_id": modo_id,
                "distancia": distancia,
                "estacion_base_id": estacion_base_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const URL = "http://192.168.1.40:4040/nodo/"
        fetch(URL, body)
        .then(res => res.json())
    }

    return (
        <div className={'absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black bg-opacity-40 ' + opacidad} >
            <form className='form p-4 bg-white rounded-lg'>
                <h4 className='text-center bold mb-4'>AGREGAR</h4>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Ubicación:</label>
                    <input type="text" placeholder="2" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setubicacion_id(e.target.value)}></input>
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Placa id:</label>
                    <input type="text" placeholder="2" className='border rounded-lg ml-4 p-1 flex-1'onChange={e => setplaca_id(e.target.value)}></input>
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">IP:</label>
                    <input type="text" placeholder="192.192.8.8" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setip(e.target.value)}></input>
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Mascara:</label>
                    <input type="text" placeholder="255.255.128.0" className='border rounded-lg ml-4 p-1 flex-1'onChange={e => setmascara(e.target.value)}></input>
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Gateway:</label>
                    <input type="text" placeholder="192.192.8.8" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setgateway(e.target.value)}></input>
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Nivel Bateria:</label>
                    <input type="text" placeholder="10" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setbateria_nivel_id(e.target.value)}></input>
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Modo_id:</label>
                    <input type="text" placeholder="1" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setmodo_id(e.target.value)}></input>
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Distancia:</label>
                    <input type="text" placeholder="50" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setdistancia(e.target.value)}></input>
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Estación Base:</label>
                    <input type="text" placeholder="1" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setestacion_base_id(e.target.value)}></input>
                </div>
               
                <div className='flex justify-between' >
                    <div className="flex-1" onClick={agregarNodo}><ButtonPS estilo="primario" texto="Agregar" espacio="mr-6" funcion={funcion}/></div>
                    <div className='flex-1'><ButtonPS estilo="secundario" texto="Cancelar" funcion={funcion} /></div>
                </div>
            </form>
        </div>
    )
}
export default FormNodo

