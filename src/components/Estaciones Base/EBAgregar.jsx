import React from 'react'
import { useState } from 'react'
import ButtonPS from '../Comp/ButtonPS'
import InputCP from '../Comp/InputCP'


const EBAgregar = ({ visible, agregar }) => {
    let opacidad = "invisible"
    if (visible) {
        opacidad = "visible"
    }    

    const [fabrica, setfabrica] = useState(0)
    const [ubicacion, setubicacion] = useState(0)
    const [modelo, setmodelo] = useState("")
    const [nodo, setnodo] = useState(0)
    const [ip, setip] = useState("")
    const [mascara, setmascara] = useState("")
    const [dns, setdns] = useState("")    

    const agregarEB = () => {
        const body = {
            method: 'POST',
            body: JSON.stringify({
                "fabrica_ruc": fabrica,
                "ubicacion_id": ubicacion,
                "modelo": modelo,
                "nodos_cant": nodo,
                "ip": ip,
                "mascara": mascara,
                "dns": dns
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const URL = "http://192.168.1.40:4040/estacionbase/"
        fetch(URL, body)
        .then(res => res.json())        
    }
    return (
        <div className={'absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-black bg-opacity-40 ' + opacidad} >
            <form className='form p-4 bg-white rounded-lg'>
                <h4 className='text-center bold mb-4'>AGREGAR</h4>

                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Fábrica:</label>
                    <input type="text" placeholder="1" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setfabrica(e.target.value)} />
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Ubicación:</label>
                    <input type="text" placeholder="1" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setubicacion(e.target.value)} />
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Modelo:</label>
                    <input type="text" placeholder="MB4757" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setmodelo(e.target.value)} />
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Nº Nodos:</label>
                    <input type="text" placeholder="11" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setnodo(e.target.value)} />
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Ip:</label>
                    <input type="text" placeholder="192.168.172.1" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setip(e.target.value)} />
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Mascara:</label>
                    <input type="text" placeholder="255.255.0.0" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setmascara(e.target.value)} />
                </div>
                <div className="flex items-center mb-2">
                    <label className="flex-1 uppercase">Dns:</label>
                    <input type="text" placeholder="192.168.172.1" className='border rounded-lg ml-4 p-1 flex-1' onChange={e => setdns(e.target.value)} />
                </div>
                <div className="flex justify-between">
                    <div className="flex-1" onClick={agregarEB}><ButtonPS estilo="primario" texto="Agregar" espacio="mr-6" funcion={agregar} /></div>
                    <div className='flex-1'><ButtonPS estilo="secundario" texto="Cancelar" funcion={agregar} /></div>
                </div>
            </form>
        </div>
    )
}

export default EBAgregar