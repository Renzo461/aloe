import menu from "../../images/menu.svg"
import AsideNavBarMenu from './AsideNavBarMenu'
import AsideNavBarUser from "./AsideNavBarUser";
import { FaEnvira, FaUsers } from 'react-icons/fa';
import { AiFillCar, AiFillSetting } from 'react-icons/ai'
import { BsHouseDoorFill } from 'react-icons/bs'
import { useState } from "react";

const AsideNavBar = ({nombre}) => {  
  const [colapse, setcolapse] = useState(true)

  function activeMenu(e) {
    //SELECCIONO TODOS LOS MENUS
    const menuList = document.querySelectorAll(".menu")

    // SI LE HAGO CLICK AL H5
    if (e.target.parentElement.classList.contains("menu")) {
      menuList.forEach(element => element.classList.remove("active"));
      e.target.parentElement.classList.add("active")
    }
    // SI LE HAGO CLICK AL CONTENEDOR
    else if (e.target.classList.contains("menu")) {
      menuList.forEach(element => element.classList.remove("active"));
      e.target.classList.add("active")
    }
  }
  function colapseMenu(e){
    setcolapse(!colapse)
    if(colapse){
      e.target.parentElement.parentElement.classList.remove("w-14")
      e.target.parentElement.parentElement.classList.add("w-96")      
    }
    else{
      e.target.parentElement.parentElement.classList.remove("w-96")
      e.target.parentElement.parentElement.classList.add("w-14")      
    }
  }

  return (
    <div className='w-14 overflow-hidden bgVerde min-h-screen nav' onClick={activeMenu}>
      <div className='flex justify-end h-14 p-2  border-b border-gray-100'>
        <img src={menu} alt="menuIcon" className='menuColapse cursor-pointer w-10' onClick={colapseMenu} />
      </div>
      <AsideNavBarUser nombre={nombre}></AsideNavBarUser>
      <AsideNavBarMenu icon={<FaEnvira/>} titulo="Ambiente" active={true}></AsideNavBarMenu>
      <AsideNavBarMenu icon={<AiFillCar/>} titulo="Transporte"></AsideNavBarMenu>
      <AsideNavBarMenu icon={<FaUsers/>} titulo="usuarios"></AsideNavBarMenu>
      <AsideNavBarMenu icon={<BsHouseDoorFill/>} titulo="Municipalidad"></AsideNavBarMenu>
      <AsideNavBarMenu icon={<AiFillSetting/>} titulo="Configuración"></AsideNavBarMenu>      
    </div>
  )
}

export default AsideNavBar