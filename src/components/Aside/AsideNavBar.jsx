import menu from "../../images/menu.svg"
import AsideNavBarMenu from './AsideNavBarMenu'
import AsideNavBarUser from "./AsideNavBarUser";
import { FaEnvira, FaUsers } from 'react-icons/fa';
import { AiFillCar, AiFillSetting } from 'react-icons/ai'
import { BsHouseDoorFill } from 'react-icons/bs'
import { useState } from "react";
import { MdWaterDrop } from 'react-icons/md'
import SubMenu from "./SubMenu";

const AsideNavBar = ({ nombre }) => {
  const [colapse, setcolapse] = useState(false)
  const [subMenu, setsubMenu] = useState(false)
  const [activo, setactivo] = useState(false)
  function colapseMenu() {
    setcolapse(!colapse)
  }
  if (colapse === true) {
    document.querySelectorAll(".submenu").forEach(sm => sm.classList.add("hidden"))
  }

  return (
    
    <div className={'w-14 overflow-hidden bgVerde min-h-screen nav ' + (colapse ? "w-14" : "w-96")}>
      <div className='flex justify-end h-14 p-2  border-b border-gray-100' onClick={colapseMenu}>
        <img src={menu} alt="menuIcon" className='menuColapse cursor-pointer w-10' />
      </div>      
      <AsideNavBarUser nombre={nombre}></AsideNavBarUser>
      <SubMenu icon={<FaEnvira />} titulo="Ambiente" colapse={colapse}>
        <AsideNavBarMenu titulo="ECA" to="/informe-eca" />
        <AsideNavBarMenu titulo="Estaciones Base" to="/estaciones" />
        <AsideNavBarMenu titulo="Nodos" to="/nodo" />
        <AsideNavBarMenu titulo="Fábricas" to="/fa" />
      </SubMenu>
      <SubMenu icon={<MdWaterDrop />} titulo="Agua" colapse={colapse}>
        <AsideNavBarMenu titulo="Válvulas" to="/" />
        <AsideNavBarMenu titulo="Actuadores" to="/" />
      </SubMenu>
      <SubMenu icon={<AiFillCar />} titulo="Transporte" colapse={colapse}>
        <AsideNavBarMenu titulo="Empresas" to="/" />
        <AsideNavBarMenu titulo="Transporte" to="/" />
        <AsideNavBarMenu titulo="Localizar" to="/" />
      </SubMenu>
      <SubMenu icon={<FaUsers />} titulo="usuarios" colapse={colapse}>
        <AsideNavBarMenu titulo="Registro Eca" to="/eca" />
      </SubMenu>
      <SubMenu icon={<BsHouseDoorFill />} titulo="Municipalidad" colapse={colapse}>
      </SubMenu>
      <SubMenu icon={<AiFillSetting />} titulo="Configuración" colapse={colapse}>
        <AsideNavBarMenu titulo="Incidentes" to="/reporteincidente" />
      </SubMenu>
    </div>
  )
}

export default AsideNavBar