import React,{useState} from 'react'

import '../assets/style/sideBar.css'
import usuario from '../assets/images/usuario.svg'
import seta from '../assets/images/seta.svg'
import { TfiViewGrid } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa6";
import { MdPets } from "react-icons/md";
import { LuCalendarDays, LuStethoscope } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";

function SideBarUser() {

  const [active, setActive] = useState(true)

  const toggleSidebar = () => {
    setActive(!active)
  }
  return (
    <div className={`sidenav ${active ? 'active' : ''}`}>
      <div className={`header ${active ? 'active' : ''}`}>
        <a href="/"><img src={usuario} alt="Usuario" className='usuario'/></a>
        <img src={seta} alt="Seta" className={`seta ${active ? 'active' : ''}`} onClick={toggleSidebar}/>
      </div>
      <ul>
        <li>
          <a href="/"><TfiViewGrid/><span>Dashboard</span></a>
        </li>
        <li>
          <a href="/"><FaRegUser/><span>Perfil</span></a>
        </li>
        <li>
          <a href="/"><MdPets/><span>Meus Pets</span></a>
        </li>
        <li>
          <a href="/"><LuCalendarDays/><span>Agenda Consulta</span></a>
        </li>
        <li>
          <a href="/"><LuStethoscope/><span>Veterinários</span></a>
        </li>
        <li>
          <a href="/"><RiMoneyDollarCircleLine/><span>Financeiro</span></a>
        </li>
        <li>
          <a href="/"><AiOutlineMessage/><span>Mensagens</span></a>
        </li>
      </ul>
    </div>
  )
}

export default SideBarUser