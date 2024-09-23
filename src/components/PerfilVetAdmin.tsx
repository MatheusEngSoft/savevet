<<<<<<< HEAD:src/components/PerfilVetAdmin.jsx
import React, { useState, useEffect } from 'react';
import LargeVetAdmin from './LargeVetAdmin'; 
import SmallVetAdmin from './SmallVetAdmin'; 
=======
import React from 'react'
import { PiChatsLight } from "react-icons/pi";
import { LuHotel, LuFacebook, LuInstagram, LuLinkedin, LuLayoutDashboard } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { TbPencilMinus, TbPhotoEdit } from "react-icons/tb";
import logo from '../assets/images/logo.svg'
import Rating from './Rating.tsx';

>>>>>>> 6dbeec72268fcd13bfc6418ea483d50ecb54990d:src/components/PerfilVetAdmin.tsx

function PerfilVetAdmin() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? <SmallVetAdmin /> : <LargeVetAdmin />}
    </div>
  );
}

export default PerfilVetAdmin;
