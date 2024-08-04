import '../assets/style/SideBar.css';
import Usuario from '../assets/images/usuario.svg';
import Seta from '../assets/images/seta.svg';
import { TfiViewGrid } from "react-icons/tfi";
import { FaUserDoctor } from "react-icons/fa6";
import { LuStethoscope, LuClipboardSignature, LuCalendarDays } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from 'react';

export default function SideBar() {
  const [active, setActive] = useState(true);

  const toggleSidebar = () => {
    setActive(!active);
  }

  return (
    <div className={`sidenav ${active ? 'active' : ''}`}>
      <div className={`header ${active ? 'active' : ''}`}>
        <a href="/"><img src={Usuario} alt="Usuario" className='usuario'/></a>
        <img src={Seta} alt="Seta" className={`seta ${active ? 'active' : ''}`} onClick={toggleSidebar}/>
      </div>
      <ul>
        <li>
          <a href="/"><TfiViewGrid /><span>Home</span></a>
        </li>
        <li>
          <a href="/"><FaUserDoctor /><span>Perfil</span></a>
        </li>
        <li>
          <a href="/"><LuStethoscope /><span>Meus Pacientes</span></a>
        </li>
        <li>
          <a href="/"><LuClipboardSignature /><span>Atendimentos</span></a>
        </li>
        <li>
          <a href="/"><LuCalendarDays /><span>Agenda</span></a>
        </li>
        <li>
          <a href="/"><RiMoneyDollarCircleLine /><span>Financeiro</span></a>
        </li>
        <li>
          <a href="/"><AiOutlineMessage /><span>Mensagens</span></a>
        </li>
      </ul>
    </div>
  );
}
