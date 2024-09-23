import React, { useState, useEffect } from 'react';
import LargeVetAdmin from './LargeVetAdmin'; 
import SmallVetAdmin from './SmallVetAdmin'; 

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
