import React from 'react';
import { Link } from 'react-router-dom';
import { useSidebar } from './SidebarContext';
import usuario from '../assets/images/usuario.svg';
import { IoIosArrowForward } from "react-icons/io";
import { TfiViewGrid } from "react-icons/tfi";
import { FaUserDoctor, FaHandHoldingHeart } from "react-icons/fa6";
import { LuStethoscope, LuClipboardSignature, LuCalendarDays } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";

function SideBarVet() {
  const { isActive, toggleSidebar, isMobile } = useSidebar();

  const navItems = [
    { icon: <TfiViewGrid />, text: "Home", path: "/" },
    { icon: <FaUserDoctor />, text: "Perfil", path: "/profile" },
    { icon: <LuStethoscope />, text: "Meus Pacientes", path: "/patients" },
    { icon: <LuClipboardSignature />, text: "Atendimentos", path: "/appointments" },
    { icon: <LuCalendarDays />, text: "Agenda", path: "/schedule" },
    { icon: <RiMoneyDollarCircleLine />, text: "Financeiro", path: "/finance" },
    { icon: <AiOutlineMessage />, text: "Mensagens", path: "/messages" },
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

export default SideBarVet;
