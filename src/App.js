import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AsideNavBar from './components/Aside/AsideNavBar';
import HeaderNavBar from './components/Aside/HeaderNavBar'
import EBMain from './components/Estaciones Base/EBMain';
import InformECA from './components/SensoresAmbientales/InformECA'
import RegistroECA from './components/SensoresAmbientales/RegistroECA'
import RegistroIncidente from './components/Incidentes/RegistroIncidente'

const App = () => {
  const name = "laura"
  return (
    <BrowserRouter>
      <div className="flex min-h-screen App flex-nowrap">
        <AsideNavBar nombre={name} />
        <div className='flex-1'>
          <HeaderNavBar nombre={name} />
          <Routes>
            <Route path='/ambiente' element={<EBMain/>}/>
            <Route path='/configuracion' element={<InformECA />} />
            <Route path='/registro-eca' element={<RegistroECA />} />
            <Route path='/registro-incidente' element={<RegistroIncidente />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
