import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AsideNavBar from './components/Aside/AsideNavBar';
import HeaderNavBar from './components/Aside/HeaderNavBar'
import EBMain from './components/Estaciones Base/EBMain';
import InformECA from './components/SensoresAmbientales/InformECA'
import RegistroECA from './components/SensoresAmbientales/RegistroECA'
import RegistroIncidente from './components/Incidentes/RegistroIncidente'
import Nodo from './components/Nodo/Nodo';

const App = () => {
  const name = "laura"
  return (
    <BrowserRouter>
      <div className="flex min-h-screen App flex-nowrap">
        <AsideNavBar nombre={name} />
        <div className='flex-1'>
          <HeaderNavBar nombre={name} />
          <Routes>
            <Route path='/estaciones' element={<EBMain/>}/>
            <Route path='/configuracion' element={<InformECA />} />
            <Route path='/registro-eca' element={<RegistroECA />} />
            <Route path='/registro-incidente' element={<RegistroIncidente />}/>
            <Route path='/nodo' element={<Nodo/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
