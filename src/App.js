import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AsideNavBar from './components/Aside/AsideNavBar';
import HeaderNavBar from './components/Aside/HeaderNavBar'
import EBMain from './components/Estaciones Base/EBMain';
import InformECA from './components/SensoresAmbientales/InformECA'

const App = () => {
  const name = "laura"
  return (
    <BrowserRouter>
      <div className="App flex flex-nowrap min-h-screen">
        <AsideNavBar nombre={name} />
        <div className='flex-1'>
          <HeaderNavBar nombre={name} />
          <Routes>
            <Route path='/ambiente' element={<EBMain/>}/>
            <Route path='/configuracion' element={<InformECA/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
