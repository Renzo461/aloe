import React, { useState } from 'react'

import TableCP from '../Comp/Table/TableCP'
import indexCalendar, { Calender } from '../CalendarScratch/indexCalendar'
import { MOCKEVENTS, MOCKPOSEVENTS } from '../CalendarScratch/conts'


const CalendMain = () => {
    const [opacidad, setopacidad] = useState(false)

      const titulosTabla = ["LUNES","MARTES","MIÉRCOLES","JUEVES","VIERNES","SÁBADO","DOMINGO"]
      return (
        <div className='px-5 mt-5 align-middle'>
          <div>
            <h2 className='bold uppercase text-center'>Información de cortes de servicio potable</h2>
          </div>
          <Calender startingDate={new Date()} eventsArr={MOCKEVENTS} posArr={MOCKPOSEVENTS}/>
          <div className='italic'>
            <p className='txBlanco float-left mr-2 mt-48 bg-red-400'>ABC: </p><p className='d-flex float-left mr-10 mt-48'>Cortes de agua actuales</p>
            <p className='txBlanco float-left mr-2 mt-48 bg-orange-400'>ABC: </p><p className='d-flex float-left mr-10 mt-48'>Posibles cortes de agua segun trabajos</p>
          </div>
        </div>
      )




}

export default CalendMain
//<p className='txBlanco float-left mr-2 mb-8 bg-red-400'>ABC: </p><p className='d-flex float-left mr-10'>Cortes de agua actuales</p>
//<p className='txBlanco float-left mr-2 mb-8 bg-orange-400'>ABC: </p><p className='d-flex'>Posibles cortes de agua segun trabajos</p>