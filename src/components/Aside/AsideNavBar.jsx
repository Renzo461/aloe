import menu from "../../images/menu.svg"
import AsideNavBarMenu from './AsideNavBarMenu'
import AsideNavBarUser from "./AsideNavBarUser";
import { FaEnvira, FaUsers } from 'react-icons/fa';
import { AiFillCar, AiFillSetting } from 'react-icons/ai'
import { BsHouseDoorFill } from 'react-icons/bs'
import { useState } from "react";

const AsideNavBar = ({ nombre }) => {
  const [colapse, setcolapse] = useState(true)

  function colapseMenu(e) {
    setcolapse(!colapse)
    if (colapse) {
      e.target.parentElement.parentElement.classList.remove("w-14")
      e.target.parentElement.parentElement.classList.add("w-96")
    }
    else {
      e.target.parentElement.parentElement.classList.remove("w-96")
      e.target.parentElement.parentElement.classList.add("w-14")
    }
  }

  return (
    <div className='w-14 overflow-hidden bgVerde min-h-screen nav'>
      <div className='flex justify-end h-14 p-2  border-b border-gray-100'>
        <img src={menu} alt="menuIcon" className='menuColapse cursor-pointer w-10' onClick={colapseMenu} />
      </div>
      <AsideNavBarUser nombre={nombre}></AsideNavBarUser>
      <AsideNavBarMenu icon={<FaEnvira />} titulo="Ambiente" nav="/ambiente"/>
      <AsideNavBarMenu icon={<AiFillCar />} titulo="Transporte" nav="/transporte"/>
      <AsideNavBarMenu icon={<FaUsers />} titulo="usuarios" nav="/usuario"/>
      <AsideNavBarMenu icon={<BsHouseDoorFill />} titulo="Municipalidad" nav="/municipalidad"/>
      <AsideNavBarMenu icon={<AiFillSetting />} titulo="Configuración" nav="/configuracion"/>
    </div>
  )
}

export default AsideNavBar