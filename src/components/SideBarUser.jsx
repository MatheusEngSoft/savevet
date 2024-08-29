import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from './SidebarContext';
import usuario from '../assets/images/usuario.svg';
import { TfiViewGrid } from "react-icons/tfi";
import { FaRegUser, FaHandHoldingHeart } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { LuCalendarDays, LuStethoscope } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";
import { IoIosArrowForward } from 'react-icons/io';

function SideBarUser() {
  const { isActive, toggleSidebar, isMobile } = useSidebar();

  const navItems = [
    { icon: <TfiViewGrid />, text: "Dashboard", path: "/" },
    { icon: <FaRegUser />, text: "Perfil", path: "/profile" },
    { icon: <MdPets />, text: "Meus Pets", path: "/my-pets" },
    { icon: <LuCalendarDays />, text: "Agenda Consulta", path: "/schedule" },
    { icon: <LuStethoscope />, text: "Veterinários", path: "/veterinarians" },
    { icon: <RiMoneyDollarCircleLine />, text: "Financeiro", path: "/finance" },
    { icon: <AiOutlineMessage />, text: "Mensagens", path: "/chat" },
    { icon: <IoBagAddOutline />, text: "Emergência", path: "/emergency" },
    { icon: <FaHandHoldingHeart />, text: "Convidar um amigo", path: "/invite" },
  ];

  return (
    <nav className={`sidenav ${isActive ? 'active' : ''}`} aria-label="Main navigation">
      <div className={`header ${isActive ? 'active' : ''}`}>
        <Link to="/">
          <img src={usuario} alt="Usuario" className='usuario' />
        </Link>
        <button 
          onClick={toggleSidebar} 
          aria-expanded={isActive}
          aria-label={isActive ? "Collapse sidebar" : "Expand sidebar"}
        >
               <IoIosArrowForward className={`seta ${isActive ? 'active' : ''}`}/>
        </button>
      </div>
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>
              {item.icon}
              <span>{!isMobile || isActive ? item.text : ''}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideBarUser;
