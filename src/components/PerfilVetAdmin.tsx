import React, { useState, useEffect } from 'react';
import LargeVetAdmin from './LargeVetAdmin.tsx'; 
import SmallVetAdmin from './SmallVetAdmin.tsx'; 


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
